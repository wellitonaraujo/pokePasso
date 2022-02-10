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

import Home from './src/pages/Home'
import Pokemon from './src/pages/Pokemon'

const Stack = createNativeStackNavigator()
const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>

          <Stack.Screen name="Home"
                        component={Home}
                        options={{
                          title: "Lista de Pokemons"
                        }}

                        />

          <Stack.Screen name="Pokemon" 
                        component={Pokemon}
                        options={{
                          title:"Informações"
                        }}
                        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
