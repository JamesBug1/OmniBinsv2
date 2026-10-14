type BinIdentifierSource = {
  id?: unknown;
  node?: unknown;
  sensorDataName?: unknown;
  sensorNode?: unknown;
  sensorId?: unknown;
  sensor_id?: unknown;
};

type SensorIdentifierSource = {
  id?: unknown;
  node?: unknown;
  bin?: unknown;
  binId?: unknown;
  bin_id?: unknown;
};

function normalizeIdentifier(value: unknown): string {
  return String(value ?? '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

function getBinIdentifiers(bin: BinIdentifierSource): Set<string> {
  return new Set([
    bin.id,
    bin.node,
    bin.sensorDataName,
    bin.sensorNode,
    bin.sensorId,
    bin.sensor_id,
  ].map(normalizeIdentifier).filter(Boolean));
}

function getSensorIdentifiers(sensor: SensorIdentifierSource): Set<string> {
  return new Set([
    sensor.node,
    sensor.id,
    sensor.bin,
    sensor.binId,
    sensor.bin_id,
  ].map(normalizeIdentifier).filter(Boolean));
}

function legacyBinForSensor(sensor: SensorIdentifierSource): string | null {
  const identifiers = getSensorIdentifiers(sensor);
  return ['node1', 'node01', 'node=1', 'node=01'].some((identifier) => identifiers.has(identifier))
    ? 'bin10'
    : null;
}

export function isSensorLinkedToBin(sensor: SensorIdentifierSource, bin: BinIdentifierSource): boolean {
  const sensorIdentifiers = getSensorIdentifiers(sensor);
  const binIdentifiers = getBinIdentifiers(bin);
  const legacyBinId = legacyBinForSensor(sensor);

  if (legacyBinId) sensorIdentifiers.add(legacyBinId);
  return Array.from(sensorIdentifiers).some((identifier) => binIdentifiers.has(identifier));
}

export function isSensorLinkedToRegisteredBin(
  sensor: SensorIdentifierSource,
  bins: BinIdentifierSource[]
): boolean {
  return bins.some((bin) => isSensorLinkedToBin(sensor, bin));
}

export function findSensorForBin<T extends SensorIdentifierSource>(
  sensors: T[],
  bin: BinIdentifierSource
): T | undefined {
  return sensors.find((sensor) => isSensorLinkedToBin(sensor, bin));
}