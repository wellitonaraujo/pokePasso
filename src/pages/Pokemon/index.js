
import React, { useEffect, useState } from 'react';
import {  SafeAreaView, Text, Image, View, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';

import api from '../../services/api';
import styles from './styles';
import { colors } from '../colors';

const Pokemon = ({route}) => {

  const [pokemon, setPokemon] = useState({type: ['']})

  // hook que será chamado quando o pokemon for montados na tela
  useEffect(() => {

    // Buscando e armazenando nosssos pokemons por tipo e habilidade
    const fethPokemon = (name) => {
      const typeList = [];
      const abilitiesList = [];

      api.get(`${name}`).then((res) => {
        res.data.types.map(res => typeList.push(res.type.name));
        res.data.abilities.map(res => abilitiesList.push(res.ability.name));
          
          setPokemon({
              id: route.params.id,
              name: route.params.name, 
              type: typeList, 
              height: res.data.height,
              weight: res.data.weight,
              abilitie1: abilitiesList[0],
              abilitie2: abilitiesList[1],
          });

      })
  }

  fethPokemon(`${route.params.name}`)

  }, [])

  const pokemonName = route.params.name.charAt(0) + route.params.name.slice(1);
  
  return (
    <SafeAreaView style={[styles.card, colors[pokemon.type[0]]]}>
    <Text style={styles.name}>{pokemonName.toLocaleUpperCase()}</Text>
    <Animatable.Image
        animation='pulse'
        iterationCount={Infinity}
        style={styles.pokemonImage}
        source={{
            uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${route.params.id}.png`,
        }}

    >
    </Animatable.Image>
    <Text style={styles.type}>{pokemon.type.join(' | ').toLocaleUpperCase()}</Text>
    <View style={styles.informations}>
        <Text style={styles.pokemonInfo}>Altura: {pokemon.height} cm</Text>
        <Text style={styles.pokemonInfo}>Peso: {pokemon.weight} g</Text>
        <Text style={styles.pokemonInfo}>Habilidade 1: {pokemon.abilitie1}</Text>
        <Text style={styles.pokemonInfo}>Habilidade 2: {pokemon.abilitie2}</Text>
    </View>
</SafeAreaView>
  );
};

export default Pokemon;
