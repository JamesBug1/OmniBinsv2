// ============================================================================
// MAP LOCATION - View and track bin locations on map
// ============================================================================

import { useEffect, useMemo, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { divIcon } from 'leaflet';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { MapPin, Navigation, Clock } from 'lucide-react';
import { subscribeBins, subscribeSensorData } from '../../firebase';
import 'leaflet/dist/leaflet.css';

const campusCenter = {
  lat: 9.8826944,
  lng: 123.5993333,
};

const fallbackBins = [
  {
    id: 'Bin-10',
    location: 'CTU Argao Campus, Cebu, Philippines',
    status: 'normal',
    capacity: 18,
    lat: 9.8826944,
    lng: 123.5993333,
    lastCollection: '2026-06-15',
  },
  {
    id: 'Bin-11',
    location: 'CTU Argao Campus Main Gate',
    status: 'near-full',
    capacity: 67,
    lat: 9.8826944,
    lng: 123.5993333,
    lastCollection: '2026-06-13',
  },
  {
    id: 'Bin-12',
    location: 'CTU Argao Campus Admin Building',
    status: 'full',
    capacity: 92,
    lat: 9.8826944,
    lng: 123.5993333,
    lastCollection: '2026-06-10',
  },
];

type BinMapEntry = {
  id: string;
  location: string;
  status: string;
  capacity: number;
  lat: number;
  lng: number;
  lastCollection: string;
};

const normalizeBinRecord = (item: any): BinMapEntry => {
  const id = String(item?.id ?? item?.binId ?? item?.name ?? 'Bin');
  const rawLocation = item?.location ?? item?.address ?? item?.name ?? item?.node ?? 'CTU Argao Campus';
  const rawLat = Number(item?.lat ?? item?.latitude ?? item?.coordinates?.lat ?? item?.location?.lat ?? campusCenter.lat);
  const rawLng = Number(item?.lng ?? item?.longitude ?? item?.coordinates?.lng ?? item?.location?.lng ?? campusCenter.lng);
  const capacity = Number(item?.capacity ?? item?.fillLevel ?? item?.percentage ?? 0);
  const status = String(item?.status ?? (capacity >= 80 ? 'full' : capacity >= 60 ? 'near-full' : 'normal')).toLowerCase();

  return {
    id: id.startsWith('Bin') || id.startsWith('BIN') ? id : `Bin-${id}`,
    location: String(rawLocation),
    status,
    capacity: Number.isFinite(capacity) ? capacity : 0,
    lat: Number.isFinite(rawLat) ? rawLat : campusCenter.lat,
    lng: Number.isFinite(rawLng) ? rawLng : campusCenter.lng,
    lastCollection: item?.lastCollection ?? item?.updatedAt ?? item?.lastUpdated ?? 'Recently',
  };
};

export function MapLocation() {
  const [liveBins, setLiveBins] = useState<BinMapEntry[]>(fallbackBins);
  const [selectedBin, setSelectedBin] = useState<BinMapEntry | null>(fallbackBins[0]);
  const [rawBins, setRawBins] = useState<any[]>([]);
  const [sensorsByNode, setSensorsByNode] = useState<Record<string, any>>({});

  useEffect(() => {
    const unsubBins = subscribeBins((bins) => {
      setRawBins(bins || []);
    });
    const unsubSensors = subscribeSensorData((sensors) => {
      const map: Record<string, any> = {};
      sensors.forEach((s: any) => {
        const node = String(s.node ?? s.location ?? s.id ?? '').toLowerCase();
        if (node) map[node] = s;
      });
      setSensorsByNode(map);
    });

    return () => {
      try { unsubBins(); } catch (e) { /* ignore */ }
      try { unsubSensors(); } catch (e) { /* ignore */ }
    };
  }, []);

  // Recompute liveBins whenever rawBins or sensors change
  useEffect(() => {
    const normalized = (rawBins && rawBins.length > 0 ? rawBins.map(normalizeBinRecord) : fallbackBins).map((bin) => {
      // Try to find sensor data for this bin by node name variants
      const nodeKeys = [
        bin.id.toLowerCase(),
        bin.id.replace(/^bin[-_]?/i, '').toLowerCase(),
      ];
      let sensor: any = null;
      for (const k of nodeKeys) {
        if (sensorsByNode[k]) { sensor = sensorsByNode[k]; break; }
      }

      if (sensor) {
        const weight = Number(sensor.weight ?? sensor.weight_kg ?? sensor.wasteWeight ?? 0);
        if (Number.isFinite(weight)) {
          const cap = Math.min(100, Math.round((weight / 50) * 100));
          bin.capacity = cap;
          bin.status = cap >= 80 ? 'full' : cap >= 60 ? 'near-full' : 'normal';
        }
      }

      return bin;
    });

    setLiveBins(normalized);
    setSelectedBin((current) => current ?? normalized[0] ?? fallbackBins[0]);
  }, [rawBins, sensorsByNode]);

  // Adjust markers when multiple bins share identical coordinates to avoid overlapping clicks
  const adjustedLiveBins = useMemo(() => {
    if (!liveBins || liveBins.length === 0) return liveBins;
    // group by rounded coordinates
    const groups: Record<string, BinMapEntry[]> = {};
    liveBins.forEach((b) => {
      const key = `${b.lat.toFixed(6)}_${b.lng.toFixed(6)}`;
      groups[key] = groups[key] || [];
      groups[key].push(b);
    });

    const adjusted: BinMapEntry[] = [];
    const radius = 0.00004; // small offset (~4-5 meters)
    Object.values(groups).forEach((group) => {
      if (group.length === 1) {
        adjusted.push(group[0]);
        return;
      }

      const n = group.length;
      group.forEach((b, i) => {
        const angle = (2 * Math.PI * i) / n;
        const adjustedLat = b.lat + Math.cos(angle) * radius;
        const adjustedLng = b.lng + Math.sin(angle) * radius;
        adjusted.push({ ...b, lat: adjustedLat, lng: adjustedLng });
      });
    });

    return adjusted;
  }, [liveBins]);

  const priorityBins = useMemo(
    () => [...liveBins].filter((bin) => bin.status === 'full' || bin.status === 'near-full' || bin.status === 'critical').sort((a, b) => b.capacity - a.capacity),
    [liveBins]
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical': return 'bg-red-700';
      case 'full': return 'bg-red-500';
      case 'near-full': return 'bg-yellow-500';
      default: return 'bg-green-500';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'critical': return <Badge className="bg-red-700 text-white">Critical</Badge>;
      case 'full': return <Badge variant="destructive">Full</Badge>;
      case 'near-full': return <Badge className="bg-yellow-500 text-white">Near Full</Badge>;
      default: return <Badge className="bg-green-500 text-white">Normal</Badge>;
    }
  };

  const getMarkerColor = (status: string) => {
    switch (status) {
      case 'critical': return '#b91c1c';
      case 'full': return '#ef4444';
      case 'near-full': return '#f59e0b';
      default: return '#22c55e';
    }
  };

  const getPinIcon = (status: string) =>
    divIcon({
      className: '',
      html: `
        <div style="
          position: relative;
          width: 26px;
          height: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateY(-2px);
        ">
          <svg width="26" height="26" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 3px 4px rgba(0,0,0,0.25));">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" fill="${getMarkerColor(status)}"/>
          </svg>
        </div>
      `,
      iconSize: [26, 26],
      iconAnchor: [13, 26],
      popupAnchor: [0, -20],
    });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Map & Location</h2>
        <p className="text-gray-900 font-semibold">Interactive map showing all smart bin locations</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Bin Locations Map</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-200">
              <MapContainer
                center={[campusCenter.lat, campusCenter.lng]}
                zoom={16}
                scrollWheelZoom={true}
                className="h-full w-full"
              >
                <TileLayer
                  attribution='&copy; OpenStreetMap contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {(adjustedLiveBins || liveBins).map((bin) => (
                  <Marker
                    key={bin.id}
                    position={[bin.lat, bin.lng]}
                    icon={getPinIcon(bin.status)}
                    eventHandlers={{ click: () => setSelectedBin(bin) }}
                  >
                    <Popup>
                      <div className="space-y-1">
                        <div className="font-bold">{bin.id}</div>
                        <div className="text-sm text-gray-600">{bin.location}</div>
                        <div className="text-sm">Status: {bin.status}</div>
                        <div className="text-sm">Capacity: {bin.capacity}%</div>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>

              <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-3 z-[400]">
                <div className="flex items-center gap-2 text-sm mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-600"></div>
                  <span className="text-gray-900 font-semibold">Normal</span>
                </div>
                <div className="flex items-center gap-2 text-sm mb-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-600"></div>
                  <span className="text-gray-900 font-semibold">Near Full</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-red-600"></div>
                  <span className="text-gray-900 font-semibold">Full</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Bin Details</CardTitle>
          </CardHeader>
          <CardContent>
            {selectedBin ? (
              <div className="space-y-4">
                <div>
                  <p className="text-lg font-bold">{selectedBin.id}</p>
                  <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                    <MapPin className="h-4 w-4" />
                    {selectedBin.location}
                  </div>
                </div>

                <div className="pt-3 border-t space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Status</span>
                    {getStatusBadge(selectedBin.status)}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Capacity</span>
                    <span className="font-bold">{selectedBin.capacity}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Coordinates</span>
                      <span className="text-sm font-mono">{selectedBin.lat}, {selectedBin.lng}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm pt-2 border-t">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600">Last collection: {selectedBin.lastCollection}</span>
                  </div>
                </div>

                <button className="w-full mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2 cursor-pointer">
                  <Navigation className="h-4 w-4" />
                  Get Directions
                </button>
              </div>
            ) : (
              <div className="text-center text-gray-500 py-8">
                <MapPin className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p>Click on a bin marker to view details</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Priority Collection List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {priorityBins.map((bin) => (
              <div
                key={bin.id}
                className="flex items-center justify-between p-3 border rounded-lg hover:bg-white cursor-pointer"
                onClick={() => setSelectedBin(bin)}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(bin.status)}`}></div>
                  <div>
                    <p className="font-medium">{bin.id}</p>
                    <p className="text-sm text-gray-600">{bin.location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">{bin.capacity}%</p>
                  <p className="text-xs text-gray-500">{bin.lastCollection}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}