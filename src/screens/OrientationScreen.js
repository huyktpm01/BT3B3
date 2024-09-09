import React, { useState, useEffect } from 'react';
import { View, Button, Dimensions, StyleSheet } from 'react-native';

const OrientationScreen = () => {
  const [orientation, setOrientation] = useState('PORTRAIT');

  useEffect(() => {
    const updateOrientation = () => {
      const { width, height } = Dimensions.get('window');
      setOrientation(width > height ? 'LANDSCAPE' : 'PORTRAIT');
    };

    // Gọi hàm cập nhật khi component mount
    updateOrientation();

    // Lắng nghe thay đổi kích thước màn hình
    const subscription = Dimensions.addEventListener('change', updateOrientation);

    return () => {
      // Xóa sự kiện khi component unmount
      subscription?.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      {orientation === 'PORTRAIT' ? (
        <View style={styles.buttonContainerPortrait}>
          <Button title="Button 1" onPress={() => {}} />
          <Button title="Button 2" onPress={() => {}} />
        </View>
      ) : (
        <View style={styles.buttonContainerLandscape}>
          <Button title="Button 1" onPress={() => {}} />
          <Button title="Button 2" onPress={() => {}} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainerPortrait: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainerLandscape: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default OrientationScreen;
