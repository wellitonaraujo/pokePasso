import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import PokemonList from '../pages/PokemonList'
import Pokemon from '../pages/Pokemon'
import FavoriteList from '../pages/FavoriteList'

const Stack = createNativeStackNavigator()
 
export default function AppRoutes() {
  return(
    <Stack.Navigator initialRouteName='PokemonList'>

      <Stack.Screen name="PokemonList"
                    component={PokemonList}
                    options={{
                      title: "Pokedéx",
                      headerTintColor: "#f0f0f0",
                      headerStyle: {
                        backgroundColor: "#1c1c1c",
                        }
                      }}/>

      <Stack.Screen name="Pokemon" 
                    component={Pokemon}
                    options={{
                      title:"Informações",
                      headerTintColor: "#f0f0f0",
                      headerStyle: {
                        backgroundColor: "#1c1c1c",
                        height: 300
                        }
                      }}/>
            <Stack.Screen name="FavoriteList" 
                    component={FavoriteList}
                    options={{
                      title:"Meus Favoritos",
                      headerTintColor: "#f0f0f0",
                      headerStyle: {
                        backgroundColor: "#1c1c1c",
                        height: 300
                        }
                      }}/>
    </Stack.Navigator>
  )
}