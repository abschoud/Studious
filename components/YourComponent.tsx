// YourComponent.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function YourComponent({ style, item, dayIndex, daysTotal }) {
  if (!item) {
    return null; // Handle cases where item is undefined
  }

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.details}>{dayIndex} of {daysTotal}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    borderRadius: 10,
    padding: 10,
    elevation: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    color: 'gray',
  },
});