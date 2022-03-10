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
import { useDispatch, useSelector } from 'react-redux';

import api from  '../../services/api'
import styles from './styles'
import Search from '../../components/Search';

const PokemonList = () => {
  const pokemonClick = useSelector(state => state.pokemon )

  const dispatch = useDispatch()

  const navigation = useNavigation()

  const [loading, setLoading] = useState(false)

  const [pokemon, setPokemon] = useState([])
  
  const [offset, setOffset] = useState(0)
  const [ waiting, setWaiting ] = useState(true)

  const limit = 1118

useEffect(() => {

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

        setLoading(false)
        setWaiting(false)

        setPokemon((item) => [...item, ...pokemonList])

    }).catch(error => {
        console.log(error)
    })
}

fethPokemon()
}, [offset])

// função para disparar alguma ação 
function handlePokemon(pokemon) {
  dispatch({
    type: 'USE_POKEMON',
    pokemon
  })
}

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
                    // Navegacao para a Tela de Informações do Pokemon
                      <Pressable style={[styles.card]} onPress={() => 
                           handlePokemon({pokemon: item}) +
                           navigation.navigate('Pokemon', { name: item.name, id: item.id })
                           
                          }>
  
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

