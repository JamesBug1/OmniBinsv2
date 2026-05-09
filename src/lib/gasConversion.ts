export interface GasSensorRecord {
  id: string;
  location: string;
  weight: number;
  capacity: number;
  nh3: number;
  ch4: number;
  status: string;
  node?: string;
  distance?: number;
  timestamp?: number;
}

export const parseNumber = (value: any, fallback = 0): number => {
  if (typeof value === 'number') return value;
  if (typeof value === 'string') {
    const parsed = parseFloat(value);
    return Number.isFinite(parsed) ? parsed : fallback;
  }
  return fallback;
};

const safeLog10 = (value: number): number => Math.log10(Math.max(value, 1e-6));

const computeStatus = (record: GasSensorRecord): string => {
  if (record.status) return record.status;
  if (record.weight >= 80) return 'Full';
  if (record.weight >= 60) return 'Near Full';
  if (record.weight <= 20) return 'Empty';
  return 'Normal';
};

export const convertMq4ToCh4 = (mq4Value: number, r0 = 10): number => {
  if (mq4Value <= 0 || r0 <= 0) return 0;
  const ratio = mq4Value / r0;
  const logPpm = -0.38 * safeLog10(ratio) + 1.96;
  const ppm = Math.pow(10, logPpm);
  return Number.isFinite(ppm) ? ppm : 0;
};

export const convertMq135ToNh3 = (mq135Value: number, r0 = 10): number => {
  if (mq135Value <= 0 || r0 <= 0) return 0;
  const ratio = mq135Value / r0;
  const logPpm = -0.48 * safeLog10(ratio) + 1.77;
  const ppm = Math.pow(10, logPpm);
  return Number.isFinite(ppm) ? ppm : 0;
};

export const normalizeSensorRecord = (key: string, value: any): GasSensorRecord => {
  const weight = parseNumber(value.weight ?? value.weight_kg ?? value.wasteWeight ?? 0);
  const capacity = parseNumber(value.capacity ?? value.fillLevel ?? 0);
  const rawMq135 = parseNumber(value.mq135 ?? 0);
  const rawMq4 = parseNumber(value.mq4 ?? 0);
  const r0Mq135 = parseNumber(value.mq135_r0 ?? 10);
  const r0Mq4 = parseNumber(value.mq4_r0 ?? 10);

  const nh3 = value.nh3 != null
    ? parseNumber(value.nh3)
    : convertMq135ToNh3(rawMq135, r0Mq135);
  const ch4 = value.ch4 != null
    ? parseNumber(value.ch4)
    : convertMq4ToCh4(rawMq4, r0Mq4);
  const distance = parseNumber(value.distance ?? value.distance_cm ?? 0);
  const timestamp = parseNumber(value.timestamp ?? value.time ?? value.updatedAt ?? 0);

  const record: GasSensorRecord = {
    id: key,
    location: String(value.location ?? value.node ?? key),
    weight,
    capacity,
    nh3,
    ch4,
    status: String(value.status ?? ''),
    node: value.node ? String(value.node) : undefined,
    distance: distance || undefined,
    timestamp: timestamp || undefined,
  };

  return {
    ...record,
    status: record.status || computeStatus(record),
  };
};
