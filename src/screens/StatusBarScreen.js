import React from 'react';
import { View, StatusBar, Dimensions, StyleSheet } from 'react-native';

const StatusBarScreen = () => {
  const isLandscape = Dimensions.get('window').width > Dimensions.get('window').height;

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={isLandscape ? 'light-content' : 'dark-content'}
        backgroundColor={isLandscape ? 'blue' : 'green'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StatusBarScreen;
