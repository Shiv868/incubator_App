import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IncubatorCard } from '../components/IncubatorCard';
import { Incubator } from '../types';

const mockIncubators: Incubator[] = [
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

export function DoctorDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Incubator Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockIncubators.map((incubator) => (
            <IncubatorCard
              key={incubator.id}
              incubator={incubator}
              onClick={() => navigate(`/doctor/monitor/${incubator.id}`)}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}