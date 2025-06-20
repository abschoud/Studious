// pages/detail/CardEnglish.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CardEnglish() {
  return (
    <View style={styles.container}>
      <Text>Uhh its english</Text>
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