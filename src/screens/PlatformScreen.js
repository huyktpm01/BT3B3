import React from 'react';
import { View, Button, Platform, StyleSheet } from 'react-native';

const PlatformScreen = () => {
  return (
    <View style={styles.container}>
      <Button title="Button" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Platform.select({ ios: 20, android: 10 }),
  },
});

export default PlatformScreen;
