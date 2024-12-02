import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MetricCardProps } from '../types';

export function MetricCard({ icon, title, value, alert }: MetricCardProps) {
  return (
    <View style={[styles.card, alert && styles.alertCard]}>
      <View style={styles.cardContent}>
        {icon}
        <View>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={[styles.cardValue, alert && styles.alertText]}>
            {value}
          </Text>
        </View>
      </View>
    </View>
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
  },
  alertCard: {
    backgroundColor: '#fee2e2',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  cardTitle: {
    fontSize: 14,
    color: '#64748b',
  },
  cardValue: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1e293b',
  },
  alertText: {
    color: '#dc2626',
  },
});