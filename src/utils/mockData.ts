import { Incubator } from '../types';

export const mockIncubators: Incubator[] = [
  {
    id: "INC001",
    babyName: "Baby Smith",
    temperature: 36.5,
    humidity: 45,
    gasLevel: 350,
    airQualityIndex: 95,
    uvRadiation: 0.3,
    flameDetected: false,
    lightIntensity: 500,
    lastUpdated: new Date().toISOString()
  },
  {
    id: "INC002",
    babyName: "Baby Johnson",
    temperature: 36.8,
    humidity: 48,
    gasLevel: 320,
    airQualityIndex: 92,
    uvRadiation: 0.2,
    flameDetected: false,
    lightIntensity: 450,
    lastUpdated: new Date().toISOString()
  }
];