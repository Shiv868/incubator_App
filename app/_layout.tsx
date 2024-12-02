import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen 
          name="index" 
          options={{ 
            title: 'Incubator Monitoring',
            headerShown: false 
          }} 
        />
        <Stack.Screen 
          name="doctor/login" 
          options={{ 
            title: 'Doctor Login',
            presentation: 'modal'
          }} 
        />
        <Stack.Screen 
          name="parent/login" 
          options={{ 
            title: 'Parent Login',
            presentation: 'modal'
          }} 
        />
        <Stack.Screen 
          name="doctor/dashboard" 
          options={{ title: 'Incubator Dashboard' }} 
        />
        <Stack.Screen 
          name="monitor/[id]" 
          options={{ title: 'Monitoring Details' }} 
        />
      </Stack>
    </GestureHandlerRootView>
  );
}