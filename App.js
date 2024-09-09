import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Dimensions, Platform, Appearance } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';

import HomeScreen from './src/screens/HomeScreen';
import ImageScreen from './src/screens/ImageScreen';
import KeyboardScreen from './src/screens/KeyboardScreen';
import PlatformScreen from './src/screens/PlatformScreen';
import OrientationScreen from './src/screens/OrientationScreen';
import ImageResizeScreen from './src/screens/ImageResizeScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  const [isLandscape, setIsLandscape] = useState(
    Dimensions.get('window').width > Dimensions.get('window').height
  );
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());

  useEffect(() => {
    const unlockScreenOrientation = async () => {
      await ScreenOrientation.unlockAsync();
    };

    const handleOrientationChange = () => {
      const { width, height } = Dimensions.get('window');
      setIsLandscape(width > height);
    };

    const handleColorSchemeChange = ({ colorScheme }) => {
      setColorScheme(colorScheme);
    };

    unlockScreenOrientation();

    Dimensions.addEventListener('change', handleOrientationChange);
    Appearance.addChangeListener(handleColorSchemeChange);

    return () => {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT);
      Dimensions.removeEventListener('change', handleOrientationChange);
      Appearance.removeChangeListener(handleColorSchemeChange);
    };
  }, []);

  const barStyle = isLandscape
    ? 'light-content'
    : colorScheme === 'dark'
    ? 'light-content'
    : 'dark-content';

  const tabBarBackgroundColor = isLandscape
    ? colorScheme === 'dark'
      ? '#3b3b3b'
      : '#333'
    : colorScheme === 'dark'
    ? '#1c1c1c'
    : Platform.OS === 'ios'
    ? '#f8f8f8'
    : '#fff';

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Home':
                iconName = require('./assets/home.png');
                break;
              case 'Image':
                iconName = require('./assets/image.png');
                break;
              case 'Orientation':
                iconName = require('./assets/orientation.png');
                break;
              case 'Keyboard':
                iconName = require('./assets/keyboard.png');
                break;
              case 'ImageResizeScreen':
                iconName = require('./assets/orientation.png');
                break;
              case 'Platform':
                iconName = require('./assets/platform.png');
                break;
              default:
                iconName = require('./assets/home.png');
                break;
            }

            return <Image source={iconName} style={{ width: size, height: size, tintColor: color }} />;
          },
          tabBarStyle: {
            backgroundColor: tabBarBackgroundColor,
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Image" component={ImageScreen} />
        <Tab.Screen name="Orientation" component={OrientationScreen} />
        <Tab.Screen name="Keyboard" component={KeyboardScreen} />
        <Tab.Screen name="ImageResizeScreen" component={ImageResizeScreen} />
        <Tab.Screen name="Platform" component={PlatformScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
