import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Autocomplete, FlatList } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

import styles from './styles'
import api from '../../services/api';
import PokemonList from '../PokemonList';

const Search = () => {

  const [ input, setInput ] = useState('')
  const [ pokemon, setPokemon ] = useState('');

   function searchPokemon() {

      api.get(`https://pokeapi.co/api/v2/pokemon/${input}`)
      .then(response => {

       setPokemon(response.data.name)
          
  
      }).catch(error => {
        console.log(error)
      })
      
    }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerInput}>
       
        <TextInput 
          placeholder='Buscar um Pokemon'
          value={input}
          onChangeText={ (text) => setInput(text) }
          style={styles.input}
          autoCapitalize={'none'}
        />

        <TouchableOpacity 
          onPress={ searchPokemon }
          style={styles.buttonSearch}>

          <MaterialIcons name='search' size={30} color="#fff"/>
        </TouchableOpacity>

        <FlatList
          ListHeaderComponent={PokemonList}
          
      />

      </View>
    </SafeAreaView>
  )
}

export default Search;