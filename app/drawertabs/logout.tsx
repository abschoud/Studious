import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LogOut() {
  return (
    <View style={styles.container}>
      <Text>Log Out page</Text>
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