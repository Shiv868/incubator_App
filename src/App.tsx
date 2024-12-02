import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { LoginForm } from './components/LoginForm';
import { DoctorDashboard } from './pages/DoctorDashboard';
import { MonitoringDashboard } from './components/MonitoringDashboard';

// Mock data for demonstration
const mockIncubator = {
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
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor-login" element={<LoginForm userType="doctor" />} />
        <Route path="/parent-login" element={<LoginForm userType="parent" />} />
        <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
        <Route 
          path="/doctor/monitor/:id" 
          element={<MonitoringDashboard incubator={mockIncubator} />} 
        />
        <Route 
          path="/parent/monitor" 
          element={<MonitoringDashboard incubator={mockIncubator} />} 
        />
      </Routes>
    </Router>
  );
}

export default App;