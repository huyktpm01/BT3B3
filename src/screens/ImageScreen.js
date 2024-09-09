import React from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';

const ImageScreen = () => {
  const windowWidth = Dimensions.get('window').width;
  const imageWidth = windowWidth * 0.8;
  const imageHeight = imageWidth * 0.6;

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/favicon.png')}
        style={[styles.image, { width: imageWidth, height: imageHeight }]}
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
  image: {
    resizeMode: 'contain',
  },
});

export default ImageScreen;
