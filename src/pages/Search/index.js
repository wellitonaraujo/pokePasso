import { View, Text, SafeAreaView, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useIsFocused } from '@react-navigation/native';

import styles from './styles'

const Search = () => {
  const [ input, setInput ] = useState('')

  const isFocused = useIsFocused()

  useEffect(() => {

  }, [isFocused])

  async function handleSearch() {
    if(input === "") return;

    
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

        <TouchableOpacity style={styles.buttonSearch} onPress={handleSearch}>
          <MaterialIcons name='search' size={30} color="#fff"/>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}

export default Search