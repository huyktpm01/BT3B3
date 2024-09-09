import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import ImageScreen from './src/screens/ImageScreen';
import KeyboardScreen from './src/screens/KeyboardScreen';
import PlatformScreen from './src/screens/PlatformScreen';
import StatusBarScreen from './src/screens/StatusBarScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Image" component={ImageScreen} />
        <Tab.Screen name="Keyboard" component={KeyboardScreen} />
        <Tab.Screen name="Platform" component={PlatformScreen} />
        <Tab.Screen name="StatusBar" component={StatusBarScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
