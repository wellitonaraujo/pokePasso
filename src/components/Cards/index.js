import { View, Text, FlatList, Pressable } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

import styles from './styles'

const Cards = () => {

  const navigation = useNavigation()

  return (
    <View>
         <FlatList 
              showsVerticalScrollIndicator={false}
              data={pokemon}
              numColumns={2}
              keyExtractor={ (item, id) => ` ${item.name} + ${id}` }
              renderItem={ ({item}) => {
                  return(
                      <Pressable style={[styles.card]} onPress={() => 
                           handlePokemon({pokemon: item}) +
                           navigation.navigate('Pokemon', { name: item.name, id: item.id }) }>
                          <Animatable.Image
                                  animation='pulse'
                                  iterationCount={Infinity}
                                  style={styles.pokemonImage}
                                  source={{
                                          uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${item.id}.png`,            
                                          }}
                          ></Animatable.Image>
                          <Text style={styles.name}>{item.id} - {item.name.toUpperCase()}</Text>
                          <Text style={styles.item}></Text>
                      </Pressable>
                  )
              }}
          />
    </View> 
  )
}

export default Cards;