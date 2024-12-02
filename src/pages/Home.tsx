import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Baby, UserCircle2 } from 'lucide-react';

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8"
        >
          Neonatal Incubator Monitoring System
        </motion.h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/doctor-login"
              className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center">
                <UserCircle2 size={48} className="text-blue-600 mb-4" />
                <h2 className="text-2xl font-semibold text-gray-900">Doctor Login</h2>
                <p className="mt-2 text-gray-600 text-center">
                  Access and monitor all incubators in the system
                </p>
              </div>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/parent-login"
              className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center">
                <Baby size={48} className="text-blue-600 mb-4" />
                <h2 className="text-2xl font-semibold text-gray-900">Parent Login</h2>
                <p className="mt-2 text-gray-600 text-center">
                  Monitor your baby's incubator status
                </p>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}