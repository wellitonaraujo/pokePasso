import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Pokemon from '../pages/Pokemon'

const Stack = createNativeStackNavigator();
 
export default function AppRoutes() {
    return(
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
    )
}