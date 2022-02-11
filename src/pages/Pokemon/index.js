
import React, { useEffect, useState } from 'react';
import {  SafeAreaView, Text, Image, View, StatusBar } from 'react-native';

import api from '../../services/api';
import styles from './styles';


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
    <SafeAreaView style={[styles.card, styles[pokemon.type[0]]]}>
    <Text style={styles.title}>{pokemonName.toLocaleUpperCase()}</Text>
    <Image
        style={styles.pokemonImage}
        source={{
            uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${route.params.id}.png`,
        }}
    />
    <Text style={styles.item}>{pokemon.type.join(' | ').toLocaleUpperCase()}</Text>
    <View style={styles.colunaDados}>
        <Text style={styles.pokemonItem}>Altura: {pokemon.height} cm</Text>
        <Text style={styles.pokemonItem}>Peso: {pokemon.weight} g</Text>
        <Text style={styles.pokemonItem}>habilidade 1: {pokemon.abilitie1}</Text>
        <Text style={styles.pokemonItem}>Habilidade 2: {pokemon.abilitie2}</Text>
    </View>
</SafeAreaView>
  );
};

export default Pokemon;
