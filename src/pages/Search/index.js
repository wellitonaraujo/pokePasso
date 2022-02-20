import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Alert, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useIsFocused } from '@react-navigation/native';

import styles from './styles'
import api from '../../services/api';

const Search = () => {
  const [ input, setInput ] = useState('')
  const [ pokemon, setPokemon ] = useState([]);
  const [ offset, setOffset ] = useState(0);

  const isFocused = useIsFocused()

  useEffect(() => {

  }, [isFocused])

  
  async function searchPokemon() {
    if(input == "") {
      alert('Ops, digite um nome de Pokemon...')
      setInput('')
      return;
    }

    try {
      const resp = await api.get(`https://pokeapi.co/api/v2/pokemon/${input}`)
      console.log(resp.data)

      setPokemon(resp.data)

      
      Keyboard.dismiss()
      
    } catch (error) {
      console.log(error)
    }

 
    
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

      </View>

      <View><Text>{pokemon.name}</Text></View>
    </SafeAreaView>
  )
}

export default Search