// pages/detail/[id].tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function DetailPage() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text>Detail Page for Card ID: {id}</Text>
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