import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

import styles from '../../pages/PokemonList/styles';

export default function Carditem(item) {
  const navigation = useNavigation()

  return (
    <View>
        <Pressable style={[styles.card]} onPress={() => navigation.navigate('Pokemon', { name: item.name, id: item.id })}>
              <Animatable.Image
                  animation='pulse'
                  iterationCount={Infinity}
                  style={styles.pokemonImage}
                  source={{uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${item.id}.png`}}
              ></Animatable.Image>

              <Text style={styles.name}>{item.id} - {item.name}</Text>
              <Text style={styles.item}></Text>
          </Pressable>
    </View>
    );
}