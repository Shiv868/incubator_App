import React from 'react';
import { motion } from 'framer-motion';
import { 
  Thermometer, 
  Droplets, 
  Wind, 
  Sun, 
  Flame,
  Lightbulb
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Incubator } from '../types';

interface MonitoringDashboardProps {
  incubator: Incubator;
}

export function MonitoringDashboard({ incubator }: MonitoringDashboardProps) {
  // Mock data for the chart
  const data = Array.from({ length: 24 }, (_, i) => ({
    time: `${i}:00`,
    temperature: 36 + Math.random() * 2,
    humidity: 40 + Math.random() * 20
  }));

  return (
    <div className="p-6 space-y-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <MetricCard
          icon={<Thermometer className="text-red-500" />}
          title="Temperature"
          value={`${incubator.temperature}°C`}
        />
        <MetricCard
          icon={<Droplets className="text-blue-500" />}
          title="Humidity"
          value={`${incubator.humidity}%`}
        />
        <MetricCard
          icon={<Wind className="text-green-500" />}
          title="Air Quality"
          value={incubator.airQualityIndex}
        />
        <MetricCard
          icon={<Sun className="text-yellow-500" />}
          title="UV Radiation"
          value={`${incubator.uvRadiation} mW/cm²`}
        />
        <MetricCard
          icon={<Flame className="text-orange-500" />}
          title="Flame Detector"
          value={incubator.flameDetected ? 'Alert!' : 'Normal'}
          alert={incubator.flameDetected}
        />
        <MetricCard
          icon={<Lightbulb className="text-purple-500" />}
          title="Light Intensity"
          value={`${incubator.lightIntensity} lux`}
        />
      </motion.div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4">24-Hour Monitoring</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="temperature" stroke="#ef4444" />
              <Line type="monotone" dataKey="humidity" stroke="#3b82f6" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

interface MetricCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  alert?: boolean;
}

function MetricCard({ icon, title, value, alert }: MetricCardProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className={`p-4 rounded-lg shadow-md ${
        alert ? 'bg-red-100' : 'bg-white'
      }`}
    >
      <div className="flex items-center space-x-3">
        {icon}
        <div>
          <h4 className="text-sm text-gray-500">{title}</h4>
          <p className={`text-xl font-semibold ${
            alert ? 'text-red-600' : 'text-gray-900'
          }`}>{value}</p>
        </div>
      </div>
    </motion.div>
  );
}