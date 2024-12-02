import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { User, Baby } from 'lucide-react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function Home() {
  return (
    <View style={styles.container}>
      <Animated.Text 
        entering={FadeInDown.delay(100)}
        style={styles.title}
      >
        Neonatal Incubator Monitoring System
      </Animated.Text>

      <View style={styles.grid}>
        <Link href="/doctor/login" asChild>
          <TouchableOpacity style={styles.card}>
            <User size={48} color="#2563eb" />
            <Text style={styles.cardTitle}>Doctor Login</Text>
            <Text style={styles.cardText}>
              Access and monitor all incubators
            </Text>
          </TouchableOpacity>
        </Link>

        <Link href="/parent/login" asChild>
          <TouchableOpacity style={styles.card}>
            <Baby size={48} color="#2563eb" />
            <Text style={styles.cardTitle}>Parent Login</Text>
            <Text style={styles.cardText}>
              Monitor your baby's incubator
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f9ff',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: '#1e293b',
  },
  grid: {
    gap: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 12,
    color: '#1e293b',
  },
  cardText: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
    marginTop: 8,
  },
});