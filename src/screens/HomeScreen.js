import React, { useState, useEffect } from 'react';
import { View, Button, Dimensions, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const [orientation, setOrientation] = useState('PORTRAIT');

  useEffect(() => {
    const handleChange = ({ screen }) => {
      const { width, height } = screen;
      setOrientation(width > height ? 'LANDSCAPE' : 'PORTRAIT');
    };

    const subscription = Dimensions.addEventListener('change', handleChange);

    return () => {
      subscription?.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      {orientation === 'PORTRAIT' ? (
        <View style={styles.buttonContainerPortrait}>
          <View style={styles.buttonWrapper}>
            <Button title="Button 1" onPress={() => {}} />
          </View>
          <View style={styles.buttonWrapper}>
            <Button title="Button 2" onPress={() => {}} />
          </View>
        </View>
      ) : (
        <View style={styles.buttonContainerLandscape}>
          <View style={styles.buttonWrapper}>
            <Button title="Button 1" onPress={() => {}} />
          </View>
          <View style={styles.buttonWrapper}>
            <Button title="Button 2" onPress={() => {}} />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainerPortrait: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '50%', 
  },
  buttonContainerLandscape: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  buttonWrapper: {
    width: '50%', 
  },
});

export default HomeScreen;
