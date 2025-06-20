// pages/detail/CardMaths.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CardMaths() {
  return (
    <View style={styles.container}>
      <Text>Yo its maths page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});