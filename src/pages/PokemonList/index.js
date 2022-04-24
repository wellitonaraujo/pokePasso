import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  Pressable, 
  ActivityIndicator, 
  StatusBar, 
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

import api from  '../../services/api'
import { getPokemons } from '../../services/api';
import styles from './styles'
import Search from '../../components/Search';
import Loading from '../../components/Loading';

const PokemonList = () => {
  const navigation = useNavigation()

  const [loading, setLoading] = useState(false)
  const [pokemon, setPokemon] = useState([])
  const [offset, setOffset] = useState(0)
  const [ waiting, setWaiting ] = useState(true)

  const limit = 1118

  const fethPokemon = () => {
    setLoading(true);

    api.get(`?offset=${offset}&limit=${limit}`)
       .then(pokemons => {

        const pokemonList = pokemons.data.results.map((pokemon, pokemonId) => {   
          return {
                name: pokemon.name,
                id: calcPokemonId(pokemonId + offset + 1),
              }
          })

    setPokemon((item) => [...item, pokemonList])

    }).catch(error => console.log(error))
}

useEffect(() => {
  setLoading(false)
  setWaiting(false)
  fethPokemon()
}, [offset])


// Função que calcula os IDs dos pokemons
const calcPokemonId = (id) => {
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
    return(<Loading />)
  } else{

    return (
      <SafeAreaView style={{flex: 1}}> 
        <Search /> 
        <StatusBar backgroundColor='transparent' barStyle='light-content' translucent={true}/>

        <View style={styles.container}>
            <FlatList 
                showsVerticalScrollIndicator={false}
                data={pokemon}
                numColumns={2}
                keyExtractor={ (item, id) => ` ${item.name} + ${id}` }
                renderItem={ ({item}) => {
                    return(
                        <Pressable style={[styles.card]} onPress={() => navigation.navigate('Pokemon', { name: item.name, id: item.id })}>
                            <Animatable.Image
                                    animation='pulse'
                                    iterationCount={Infinity}
                                    style={styles.pokemonImage}
                                    source={{
                                            uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${item.id}.png`,            
                                            }}
                            ></Animatable.Image>
                            <Text style={styles.name}>{item.id} - {item.name}</Text>
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

