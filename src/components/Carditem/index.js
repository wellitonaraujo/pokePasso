import React, { useEffect, useState } from 'react';
import { Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

import Loading from '../Loading';
import styles from '../../pages/PokemonList/styles';

export default function Carditem(item) {
  const navigation = useNavigation()

  const [ loading, setLoading ] = useState(true)

  useEffect(() => setLoading(false))

    return loading ? <Loading /> : (
        <>
            <Pressable style={[styles.card]} onPress={() => navigation.navigate('Pokemon', { name: item.name, id: item.id })}>
            <Text style={styles.id}>{item.id}</Text>
                <Animatable.Image
                    animation='pulse'
                    iterationCount={Infinity}
                    style={styles.pokemonImage}
                    source={{uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${item.id}.png`}}>
                </Animatable.Image>
                    <Text style={styles.name}>{item.name.toUpperCase()}</Text>
            </Pressable>
        </>
    )
}