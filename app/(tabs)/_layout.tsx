import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
// import { useHeaderTitle } from '@/context/HeaderTitleContext'; // Import the context

export default function TabLayout() {
  const colorScheme = useColorScheme();
//   const { setHeaderTitle } = useHeaderTitle(); // Access the setHeaderTitle function

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {
            backgroundColor: '#005a32' },
        }),
      }}
//       screenListeners={{
//               state: (e) => {
//                 // Update header title based on the active tab
//                 switch (e.data.state.routes[e.data.state.index].name) {
//                   case 'index':
//                     setHeaderTitle('Dashboard');
//                     console.log('Header title set to: Dashboard'); // Add console log
//                     break;
//                   case 'calendar':
//                     setHeaderTitle('Calendar');
//                     console.log('Header title set to: Calendar'); // Add console log
//                     break;
//                   case 'homework':
//                     setHeaderTitle('Homework');
//                     console.log('Header title set to: Homework'); // Add console log
//                     break;
//                   case 'alerts':
//                     setHeaderTitle('Alerts');
//                     console.log('Header title set to: Alerts'); // Add console log
//                     break;
//                   // ... other cases for your tabs
//                 }
//               },
//             }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="calendar.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="homework"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="book.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="alerts"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="bell.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}