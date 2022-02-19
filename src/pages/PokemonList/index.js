
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  Image,
  Pressable, ActivityIndicator, StatusBar
} from 'react-native';

import api from  '../../services/api'
import styles from './styles';

const PokemonList = () => {

  const navigation = useNavigation()

  const [loading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  const [ waiting, setWaiting ] = useState(true)

  const limit = 1118

// hook que será chamado quando nossos pokemons forem montados na tela
useEffect(() => {

  // Função que busca nossos pokemons
  const fethPokemon = () => {

    setLoading(true);

    api.get(`?offset=${offset}&limit=${limit}`)
       .then(pokemons => {
         
        // Percorrendo todos os nossos pokemons
        const pokemonList = pokemons.data.results.map((pokemon, pokemonId) => {   
          // Iniciando a contagem a partir de 1
          return {
                name: pokemon.name,
                id: calPokemonId(pokemonId + offset + 1),
            }
        })

        setLoading(false);
        setWaiting(false)
        
        // Atualizando nossa setPokemon com a lista 
        setPokemon((item) => [...item, ...pokemonList])

    }).catch(error => {
        console.log(error)
    })
}

fethPokemon()
}, [offset])


// Função que calcula os IDs dos pokemons
const calPokemonId = (id) => {
  let pokemonId

  if (id <= 9) {
      pokemonId = `00${id}`

  } else if (id < 100) {
      pokemonId = `0${id}`

  } else {
      pokemonId = id
  }
  return pokemonId

}

  if(waiting) {
    return(
      <View style={{  alignItems: 'center', justifyContent: 'center', flex: 1 }}> 
        <ActivityIndicator 
          color='#212121' size={50}
        />
      </View>
    )
  } else{

    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor='transparent' barStyle='light-content' translucent={true}/>
      <View style={styles.container}>
          <FlatList 
              showsVerticalScrollIndicator={false}
              // style={{ flex: 1}}
              data={pokemon}
              numColumns={2}
              keyExtractor={ (item, id) => ` ${item.name} + ${id}` }
              renderItem={ ({item}) => {
                  return(
                    // Navegacao para a Tela de Informações do Pokemon
                      <Pressable style={[styles.card]} onPress={() =>
                          navigation.navigate('Pokemon', { name: item.name, id: item.id })}>
  
                            {/* Listagem das imagens dos pokemons */}
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
      </SafeAreaView>
    );
  }

};

export default PokemonList;
