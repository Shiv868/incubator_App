import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { Thermometer, Baby } from 'lucide-react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';

const mockIncubators = [
  {
    id: "INC001",
    babyName: "Baby Smith",
    temperature: 36.5,
    lastUpdated: new Date().toLocaleTimeString(),
  },
  {
    id: "INC002",
    babyName: "Baby Johnson",
    temperature: 36.8,
    lastUpdated: new Date().toLocaleTimeString(),
  },
];

export default function DoctorDashboard() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.grid}>
        {mockIncubators.map((incubator, index) => (
          <Animated.View
            key={incubator.id}
            entering={FadeInUp.delay(index * 100)}
          >
            <TouchableOpacity
              style={styles.card}
              onPress={() => router.push(`/monitor/${incubator.id}`)}
            >
              <View style={styles.cardHeader}>
                <View style={styles.cardTitle}>
                  <Baby size={24} color="#2563eb" />
                  <Text style={styles.babyName}>{incubator.babyName}</Text>
                </View>
                <Text style={styles.incubatorId}>ID: {incubator.id}</Text>
              </View>

              <View style={styles.cardContent}>
                <View style={styles.metric}>
                  <Thermometer size={20} color="#ef4444" />
                  <Text style={styles.temperature}>{incubator.temperature}°C</Text>
                </View>
                <Text style={styles.timestamp}>
                  Last updated: {incubator.lastUpdated}
                </Text>
              </View>
            </TouchableOpacity>
          </Animated.View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  grid: {
    padding: 16,
    gap: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  babyName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
  },
  incubatorId: {
    fontSize: 14,
    color: '#64748b',
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  metric: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  temperature: {
    fontSize: 16,
    color: '#1e293b',
  },
  timestamp: {
    fontSize: 12,
    color: '#64748b',
  },
});