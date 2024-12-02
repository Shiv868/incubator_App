import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { VictoryChart, VictoryLine, VictoryAxis } from 'victory-native';
import { 
  Thermometer, 
  Droplets, 
  Wind, 
  Sun, 
  Flame,
  Lightbulb 
} from 'lucide-react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';

const mockData = {
  id: "INC001",
  babyName: "Baby Smith",
  temperature: 36.5,
  humidity: 45,
  gasLevel: 350,
  airQualityIndex: 95,
  uvRadiation: 0.3,
  flameDetected: false,
  lightIntensity: 500,
};

const chartData = Array.from({ length: 24 }, (_, i) => ({
  time: i,
  temperature: 36 + Math.random() * 2,
}));

function MetricCard({ icon, title, value, alert }: any) {
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

export default function MonitoringScreen() {
  const { id } = useLocalSearchParams();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.grid}>
        <Animated.View entering={FadeInUp.delay(100)}>
          <MetricCard
            icon={<Thermometer size={24} color="#ef4444" />}
            title="Temperature"
            value={`${mockData.temperature}°C`}
          />
        </Animated.View>

        <Animated.View entering={FadeInUp.delay(200)}>
          <MetricCard
            icon={<Droplets size={24} color="#3b82f6" />}
            title="Humidity"
            value={`${mockData.humidity}%`}
          />
        </Animated.View>

        <Animated.View entering={FadeInUp.delay(300)}>
          <MetricCard
            icon={<Wind size={24} color="#22c55e" />}
            title="Air Quality"
            value={mockData.airQualityIndex}
          />
        </Animated.View>

        <Animated.View entering={FadeInUp.delay(400)}>
          <MetricCard
            icon={<Sun size={24} color="#eab308" />}
            title="UV Radiation"
            value={`${mockData.uvRadiation} mW/cm²`}
          />
        </Animated.View>

        <Animated.View entering={FadeInUp.delay(500)}>
          <MetricCard
            icon={<Flame size={24} color="#f97316" />}
            title="Flame Detector"
            value={mockData.flameDetected ? 'Alert!' : 'Normal'}
            alert={mockData.flameDetected}
          />
        </Animated.View>

        <Animated.View entering={FadeInUp.delay(600)}>
          <MetricCard
            icon={<Lightbulb size={24} color="#a855f7" />}
            title="Light Intensity"
            value={`${mockData.lightIntensity} lux`}
          />
        </Animated.View>
      </View>

      <Animated.View 
        entering={FadeInUp.delay(700)}
        style={styles.chartContainer}
      >
        <Text style={styles.chartTitle}>24-Hour Temperature History</Text>
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
      </Animated.View>
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
  chartContainer: {
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
  chartTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 16,
  },
});