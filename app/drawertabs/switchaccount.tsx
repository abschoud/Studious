import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SwitchAccount() {
  return (
    <View style={styles.container}>
      <Text>Switch Account page</Text>
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