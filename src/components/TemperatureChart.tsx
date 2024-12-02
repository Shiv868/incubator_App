import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { VictoryChart, VictoryLine, VictoryAxis } from 'victory-native';
import { generateChartData } from '../utils/mockData';

export function TemperatureChart() {
  const chartData = generateChartData();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>24-Hour Temperature History</Text>
      <VictoryChart height={300}>
        <VictoryLine
          data={chartData}
          x="time"
          y="temperature"
          style={{
            data: { stroke: "#ef4444" }
          }}
        />
        <VictoryAxis
          tickFormat={(t) => `${t}:00`}
          style={{
            tickLabels: { fontSize: 10, padding: 5 }
          }}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(t) => `${t}°C`}
          style={{
            tickLabels: { fontSize: 10, padding: 5 }
          }}
        />
      </VictoryChart>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 16,
  },
});