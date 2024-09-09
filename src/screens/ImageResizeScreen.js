import React, { useState, useEffect } from 'react';
import { View, Image, Button, Dimensions, StyleSheet } from 'react-native';

const ImageResizeScreen = () => {
  const [orientation, setOrientation] = useState('PORTRAIT');
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  useEffect(() => {
    const handleChange = ({ screen }) => {
      const { width, height } = screen;
      setOrientation(width > height ? 'LANDSCAPE' : 'PORTRAIT');
    };

    Dimensions.addEventListener('change', handleChange);

    return () => {
      Dimensions.removeEventListener('change', handleChange);
    };
  }, []);

  const imageWidth = windowWidth * (orientation === 'PORTRAIT' ? 0.8 : 0.5); 
  const imageHeight = imageWidth * 0.6;
  const buttonWidth = orientation === 'PORTRAIT' ? 150 : 200; 

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/favicon.png')}
        style={[styles.image, { width: imageWidth, height: imageHeight }]}
      />
      <View style={orientation === 'PORTRAIT' ? styles.buttonContainerPortrait : styles.buttonContainerLandscape}>
        <View style={{ width: buttonWidth }}>
          <Button title="Button 1" onPress={() => {}} />
        </View>
        <View style={{ width: buttonWidth }}>
          <Button title="Button 2" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20, 
  },
  image: {
    resizeMode: 'contain',
    marginBottom: 20,
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
    marginTop: 20, 
  },
});

export default ImageResizeScreen;
