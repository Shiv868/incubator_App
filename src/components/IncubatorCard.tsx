import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Baby, Thermometer } from 'lucide-react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { Incubator } from '../types';

interface IncubatorCardProps {
  incubator: Incubator;
  onPress: () => void;
  index: number;
}

export function IncubatorCard({ incubator, onPress, index }: IncubatorCardProps) {
  return (
    <Animated.View entering={FadeInUp.delay(index * 100)}>
      <TouchableOpacity style={styles.card} onPress={onPress}>
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
            Last updated: {new Date(incubator.lastUpdated).toLocaleTimeString()}
          </Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 16,
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
    marginLeft: 8,
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
    marginLeft: 8,
  },
  timestamp: {
    fontSize: 12,
    color: '#64748b',
  },
});