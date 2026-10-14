// ============================================================================
// MAP LOCATION - View and track bin locations on map
// ============================================================================

import { useEffect, useMemo, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { divIcon } from 'leaflet';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { MapPin, Clock } from 'lucide-react';
import { subscribeBins, subscribeCollections, subscribeSensorData } from '../../firebase';
import { isSensorLinkedToBin } from '../../lib/binSensorLink';
import 'leaflet/dist/leaflet.css';

const campusCenter = {
  lat: 9.8826944,
  lng: 123.5993333,
};
const SENSOR_OFFLINE_AFTER_MS = 5 * 60 * 1000;

function getSensorTimestamp(value: unknown): number {
  if (typeof value === 'number' && Number.isFinite(value)) {
    if (value >= 1e12) return value;
    if (value >= 1e9) return value * 1000;
    return 0;
  }
  if (typeof value !== 'string' || !value.trim()) return 0;
  const numeric = Number(value);
  if (Number.isFinite(numeric)) return getSensorTimestamp(numeric);
  const parsed = Date.parse(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function formatSensorTimestamp(timestamp: number): string {
  return timestamp ? new Date(timestamp).toLocaleString() : 'No data received';
}

function getCollectionTimestamp(collection: any): number {
  const values = [
    collection.finishedAt,
    collection.completedAt,
    collection.timestamp,
    collection.time,
    collection.createdAt,
    collection.created_at,
    collection.scheduledDate,
  ];
  for (const value of values) {
    if (typeof value === 'number' && Number.isFinite(value)) {
      if (value >= 1e12) return value;
      if (value >= 1e9) return value * 1000;
    }
    if (typeof value === 'string' && value.trim()) {
      const parsed = Date.parse(value);
      if (Number.isFinite(parsed)) return parsed;
    }
  }
  return 0;
}

type BinMapEntry = {
  id: string;
  location: string;
  sensorDataName?: string;
  status: string;
  capacity: number;
  lastDataReceived: string;
  lat: number;
  lng: number;
  locationSource?: string;
  gpsValid?: boolean;
  lastCollection: string;
};

function getLocationText(value: unknown): string | null {
  if (typeof value === 'string' && value.trim()) return value.trim();
  if (typeof value === 'object' && value !== null) {
    const location = value as Record<string, unknown>;
    const text = location.address ?? location.name ?? location.place ?? location.label;
    if (typeof text === 'string' && text.trim()) return text.trim();
  }
  return null;
}

function getValidCoordinates(item: any): { lat: number; lng: number } | null {
  const rawLat = item?.latitude ?? item?.lat ?? item?.coordinates?.lat;
  const rawLng = item?.longitude ?? item?.lng ?? item?.coordinates?.lng;
  if (rawLat == null || rawLng == null || rawLat === '' || rawLng === '') return null;
  const lat = Number(rawLat);
  const lng = Number(rawLng);
  if (!Number.isFinite(lat) || !Number.isFinite(lng) || lat < -90 || lat > 90 || lng < -180 || lng > 180) {
    return null;
  }
  return { lat, lng };
}

const normalizeBinRecord = (item: any): BinMapEntry => {
  const id = String(item?.id ?? item?.binId ?? item?.name ?? 'Bin');
  const rawLocation = getLocationText(item?.location ?? item?.address ?? item?.name ?? item?.node) ?? 'Location unavailable';
  const coordinates = getValidCoordinates(item) ?? campusCenter;
  const capacity = Number(item?.capacity ?? item?.fillLevel ?? item?.percentage ?? 0);
  const status = String(item?.status ?? (capacity >= 80 ? 'full' : capacity >= 60 ? 'near-full' : 'normal')).toLowerCase();

  return {
    id: id.startsWith('Bin') || id.startsWith('BIN') ? id : `Bin-${id}`,
    location: rawLocation,
    sensorDataName: item?.sensorDataName ?? item?.sensorNode ?? item?.sensorId,
    status,
    capacity: Number.isFinite(capacity) ? capacity : 0,
    lastDataReceived: 'No data received',
    lat: coordinates.lat,
    lng: coordinates.lng,
    locationSource: getLocationText(item?.location_source) ?? undefined,
    gpsValid: typeof item?.gps_valid === 'boolean' ? item.gps_valid : undefined,
    lastCollection: item?.lastCollection ?? 'No collection recorded',
  };
};

function FitMapToBins({ bins }: { bins: BinMapEntry[] }) {
  const map = useMap();
  const coordinateKey = bins.map((bin) => `${bin.id}:${bin.lat},${bin.lng}`).join('|');

  useEffect(() => {
    if (bins.length === 0) return;
    if (bins.length === 1) {
      map.setView([bins[0].lat, bins[0].lng], Math.max(map.getZoom(), 15));
      return;
    }
    map.fitBounds(bins.map((bin) => [bin.lat, bin.lng] as [number, number]), { padding: [32, 32], maxZoom: 16 });
  }, [coordinateKey, map]);

  return null;
}

export function MapLocation() {
  const [liveBins, setLiveBins] = useState<BinMapEntry[]>([]);
  const [selectedBin, setSelectedBin] = useState<BinMapEntry | null>(null);
  const [rawBins, setRawBins] = useState<any[]>([]);
  const [sensorRecords, setSensorRecords] = useState<any[]>([]);
  const [collectionRecords, setCollectionRecords] = useState<any[]>([]);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 60_000);
    return () => clearInterval(interval);
  }, []);

  const getLatestSensorForBin = (bin: BinMapEntry) => sensorRecords
    .filter((sensor) => isSensorLinkedToBin(sensor, bin))
    .reduce<any | null>((latest, sensor) => {
      if (!latest) return sensor;
      const timestamp = getSensorTimestamp(sensor.timestamp ?? sensor.time ?? sensor.updatedAt);
      const latestTimestamp = getSensorTimestamp(latest.timestamp ?? latest.time ?? latest.updatedAt);
      if (timestamp !== latestTimestamp) return timestamp > latestTimestamp ? sensor : latest;
      return String(sensor.id ?? '') > String(latest.id ?? '') ? sensor : latest;
    }, null);

  const getLatestCollectionForBin = (bin: BinMapEntry) => collectionRecords
    .filter((collection) =>
      String(collection.status ?? '').toLowerCase() === 'completed' && isSensorLinkedToBin(collection, bin)
    )
    .reduce<any | null>((latest, collection) => {
      if (!latest) return collection;
      const timestamp = getCollectionTimestamp(collection);
      const latestTimestamp = getCollectionTimestamp(latest);
      if (timestamp !== latestTimestamp) return timestamp > latestTimestamp ? collection : latest;
      return String(collection.id ?? '') > String(latest.id ?? '') ? collection : latest;
    }, null);

  useEffect(() => {
    const unsubBins = subscribeBins((bins) => {
      setRawBins(bins || []);
    });
    const unsubSensors = subscribeSensorData((sensors) => {
      setSensorRecords(sensors || []);
    });
    const unsubCollections = subscribeCollections((collections) => {
      setCollectionRecords(collections || []);
    });

    return () => {
      try { unsubBins(); } catch (e) { /* ignore */ }
      try { unsubSensors(); } catch (e) { /* ignore */ }
      try { unsubCollections(); } catch (e) { /* ignore */ }
    };
  }, []);

  // Recompute markers from registered bins; sensor history alone is not inventory.
  useEffect(() => {
    const normalized = rawBins.map(normalizeBinRecord).map((bin) => {
      const sensor = getLatestSensorForBin(bin);
      const latestCollection = getLatestCollectionForBin(bin);

      if (sensor) {
        const sensorLocation = getLocationText(sensor.location ?? sensor.address);
        if (sensorLocation) bin.location = sensorLocation;

        const sensorCoordinates = getValidCoordinates(sensor);
        if (sensorCoordinates) {
          bin.lat = sensorCoordinates.lat;
          bin.lng = sensorCoordinates.lng;
        }

        bin.locationSource = getLocationText(sensor.location_source ?? sensor.locationSource) ?? bin.locationSource;
        bin.gpsValid = typeof sensor.gps_valid === 'boolean' ? sensor.gps_valid : bin.gpsValid;
      }

      if (latestCollection) {
        const timestamp = getCollectionTimestamp(latestCollection);
        const rawDate = latestCollection.finishedAt ?? latestCollection.completedAt ?? latestCollection.timestamp ?? latestCollection.time;
        bin.lastCollection = timestamp
          ? new Date(timestamp).toLocaleString()
          : String(rawDate ?? 'Collection completed');
      }

      if (sensor) {
        const timestamp = getSensorTimestamp(sensor.timestamp ?? sensor.time ?? sensor.updatedAt);
        const online = timestamp > 0 && now >= timestamp && now - timestamp < SENSOR_OFFLINE_AFTER_MS;
        bin.lastDataReceived = formatSensorTimestamp(timestamp);
        bin.status = online ? 'normal' : 'offline';
        const weight = Number(sensor.weight ?? sensor.weight_kg ?? sensor.wasteWeight ?? 0);
        if (Number.isFinite(weight)) {
          const cap = Math.min(100, Math.max(0, Math.round((weight / 50) * 100)));
          bin.capacity = cap;
          if (online) bin.status = weight >= 50 ? 'full' : weight >= 35 ? 'near-full' : 'normal';
        }
      } else {
        bin.status = 'offline';
      }

      return bin;
    });

    setLiveBins(normalized);
    setSelectedBin((current) => normalized.find((bin) => bin.id === current?.id) ?? normalized[0] ?? null);
  }, [rawBins, sensorRecords, collectionRecords, now]);

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
      case 'offline': return 'bg-gray-500';
      case 'critical': return 'bg-red-700';
      case 'full': return 'bg-red-500';
      case 'near-full': return 'bg-yellow-500';
      default: return 'bg-green-500';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'offline': return <Badge className="bg-gray-500 text-white">Offline</Badge>;
      case 'critical': return <Badge className="bg-red-700 text-white">Critical</Badge>;
      case 'full': return <Badge variant="destructive">Full</Badge>;
      case 'near-full': return <Badge className="bg-yellow-500 text-white">Near Full</Badge>;
      default: return <Badge className="bg-green-500 text-white">Normal</Badge>;
    }
  };

  const getMarkerColor = (status: string) => {
    switch (status) {
      case 'offline': return '#6b7280';
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
                <FitMapToBins bins={adjustedLiveBins || liveBins} />
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
                        <div className="text-xs text-gray-500">{bin.lat.toFixed(6)}, {bin.lng.toFixed(6)}</div>
                        {bin.locationSource && <div className="text-xs text-gray-500">Location source: {bin.locationSource}</div>}
                        {bin.gpsValid === false && <div className="text-xs text-amber-700">GPS not fixed; showing reported coordinates</div>}
                        <div className="text-sm">Status: {bin.status}</div>
                        <div className="text-sm">Capacity: {bin.capacity}%</div>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>

              <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-3 z-[400]">
                <div className="flex items-center gap-2 text-sm mb-2">
                  <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                  <span className="text-gray-900 font-semibold">Offline</span>
                </div>
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
                    <span className="text-sm text-gray-600">Last data received</span>
                    <span className="text-sm text-right">{selectedBin.lastDataReceived}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Coordinates</span>
                    <span className="text-sm font-mono">{selectedBin.lat.toFixed(6)}, {selectedBin.lng.toFixed(6)}</span>
                  </div>
                  {selectedBin.locationSource && (
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Location source</span>
                      <span className="text-sm">{selectedBin.locationSource}</span>
                    </div>
                  )}
                  {selectedBin.gpsValid === false && (
                    <p className="text-xs text-amber-700">GPS is not fixed; coordinates are the reported estimate.</p>
                  )}
                  <div className="flex items-center gap-2 text-sm pt-2 border-t">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600">Last collection: {selectedBin.lastCollection}</span>
                  </div>
                </div>

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