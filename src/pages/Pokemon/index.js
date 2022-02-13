
import React, { useEffect, useState } from 'react';
import {  SafeAreaView, Text, Image, View, StatusBar, ActivityIndicator } from 'react-native';
import * as Animatable from 'react-native-animatable';

import api from '../../services/api';
import styles from './styles';
import { colors } from '../colors_types';

const Pokemon = ({ route }) => {

  const [pokemon, setPokemon] = useState({type: ['']})
  const [ waiting, setWaiting ] = useState(true)

  // hook que será chamado quando o pokemon for montados na tela
  useEffect(() => {

    // Buscando e armazenando nosssos pokemons por tipo e habilidade
      const fethPokemon = (name) => {
        const typeList = []
        const abilitiesList = []
        const statsList = []

      api.get(`${name}`).then((res) => {
        res.data.types.map(res => typeList.push(res.type.name))
        res.data.abilities.map(res => abilitiesList.push(res.ability.name))
        res.data.stats.map(res => statsList.push(res.base_stat))
          
            setPokemon({
              id: route.params.id,
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

  setWaiting(false)

  fethPokemon(`${route.params.name}`)

  }, [])

  const pokemonName = route.params.name.charAt(0) + route.params.name.slice(1);

  if(waiting) {
    return(
      <View style={{  alignItems: 'center', justifyContent: 'center', flex: 1 }}> 
        <ActivityIndicator 
          color='#212121' size={70}
        />
      </View>
    )
  } else{
    return (
      <SafeAreaView style={[styles.card, colors[pokemon.type[0]]]}>
  
      <Animatable.Text 
      animation='fadeInUp'
      style={styles.name}>{pokemonName.toLocaleUpperCase()}</Animatable.Text>
      
      <Animatable.Image
          animation='pulse'
          iterationCount={Infinity}
          style={styles.pokemonImage}
          source={{
              uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${route.params.id}.png`,
          }}
      >
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
  }
  

};

export default Pokemon;
