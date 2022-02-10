/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';

import Routes from './src/routes';

const App = () => {
  
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};



export default App;
