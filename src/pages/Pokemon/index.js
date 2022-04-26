
import React, { useEffect, useState } from 'react';
import {  SafeAreaView, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { getPokemon } from '../../services/api';
import styles from './styles';
import { colors } from '../colors_types';
import Loading from '../../components/Loading';

const Pokemon = ({ route }) => {
  const [pokemon, setPokemon] = useState({type: ['']})
  const [ loading, setLoading ] = useState(true)

  const typeList = []
  const abilitiesList = []
  const statsList = []

  const myPokemon = () => {
    getPokemon(`${route.params.name}`)
    .then(res => {
        res.data.types.map(res => typeList.push(res.type.name))
        res.data.abilities.map(res => abilitiesList.push(res.ability.name))
        res.data.stats.map(res => statsList.push(res.base_stat))

    setPokemon({
      name: route.params.name, 
      type: typeList, 
      height: res.data.height,
      weight: res.data.weight,
      abilitie1: abilitiesList[0],
      abilitie2: abilitiesList[1],
      stats1: statsList[0],
      stats2: statsList[1],
      stats3: statsList[2],
    });
   })
  }

  useEffect(() => {
    setLoading(false)
    myPokemon()
  }, [])

  const pokemonName = route.params.name.charAt(0) + route.params.name.slice(1);

  return loading ? <Loading /> : (
      <SafeAreaView style={[styles.card, colors[pokemon.type[0]]]}>
        <Animatable.Text 
          animation='fadeInUp'
          style={styles.name}>{pokemonName.toLocaleUpperCase()}
        </Animatable.Text>
        
        <Animatable.Image
            animation='pulse'
            iterationCount={Infinity}
            style={styles.pokemonImage}
            source={{
                uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${route.params.id}.png`}}>
        </Animatable.Image>

        <Animatable.View 
          animation='fadeInDown'
          iterationCount={1}
          style={styles.typeContainer}>
          <Text style={styles.type}>{pokemon.type.join(' | ').toLocaleUpperCase()}</Text>
        </ Animatable.View>
        
          <Animatable.View
              animation='fadeInUp'
              iterationCount={1}
              style={styles.informationsContainer}>
            <Text style={styles.pokemonInfo}>Altura: {pokemon.height / 10} m</Text>
            <Text style={styles.pokemonInfo}>Peso: {pokemon.weight / 10} kg</Text>
            <Text style={styles.pokemonInfo}>Habilidade 1 {pokemon.abilitie1}</Text>
            <Text style={styles.pokemonInfo}>Habilidade 2 {pokemon.abilitie2}</Text>
          <View style={styles.statsContainer}>
            <Text style={styles.pokemonStats1}> HP {pokemon.stats1}</Text>
            <Text style={styles.pokemonStats2}> Defesa {pokemon.stats2}</Text>
            <Text style={styles.pokemonStats3}>Ataque {pokemon.stats3}</Text>
          </View>   
          </Animatable.View>
      </SafeAreaView>
    );
};

export default Pokemon;
