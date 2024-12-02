export interface User {
  id: string;
  username: string;
  role: 'doctor' | 'parent';
}

export interface Incubator {
  id: string;
  babyName: string;
  temperature: number;
  humidity: number;
  gasLevel: number;
  airQualityIndex: number;
  uvRadiation: number;
  flameDetected: boolean;
  lightIntensity: number;
  lastUpdated: string;
}

export interface MetricCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  alert?: boolean;
}