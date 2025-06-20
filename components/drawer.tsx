// tsx
import { Stack } from 'expo-router'; // Import Expo Router components
import { Link } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


interface DrawerContentProps {
  onClose: () => void;
}

export default function DrawerContent({ onClose }: DrawerContentProps) {
  return (
    <View style={styles.container}>
      <Text onPress={onClose}>Close Drawer</Text>
      <Link href="/home">Home</Link>
      {/* Add other drawer links */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

