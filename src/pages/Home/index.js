
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  Image,
  Pressable,
} from 'react-native';

import api from  '../../services/api'
import styles from './styles';
import { keyExtractor } from 'react-native/Libraries/Lists/VirtualizeUtils';

const Home = () => {

  const navigation = useNavigation()

  const [loading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);

  // Limite max de pokemons por Tela
  const limit = 15;

// hook que será chamado quando nossos pokemons forem montados na tela
useEffect(() => {

  // Função que busca nossos pokemons
  const fethPokemon = () => {

    setLoading(true);

    api.get(`?offset=${offset}&limit=${limit}`).then(pokemons => {

        // Percorrendo todos os nossos pokemons
        const pokemonList = pokemons.data.results.map((pokemon, pokemonId) => {
            
          // Iniciando a contagem a partir de 1
          return {
                name: pokemon.name,
                id: calPokemonId(pokemonId + offset + 1),
            }
        })

        setLoading(false);
        
        // Atualizando nossa setPokemon com a lista 
        setPokemon((item) => [...item, ...pokemonList])

    }).catch(error => {

        setLoading(false);
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

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={[styles.container, styles.background]}>
        <FlatList 
            showsVerticalScrollIndicator={false}
            style={{ flex: 1}}
            data={pokemon}
            keyExtractor={ item => String(item.id)}
            renderItem={ ({item}) => {
                return(

                  // Navegacao para a Tela de Informações do Pokemon
                    <Pressable style={[styles.card]} onPress={() =>
                        navigation.navigate('Pokemon', { name: item.name, id: item.id })}>

                          {/* Listagem das imagens dos pokemons */}
                        <Image
                            style={styles.pokemonImage}
                            source={{
                                uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${item.id}.png`,
                                
                            }}
                        />
                        <Text style={styles.title}>{item.id} - {item.name.toUpperCase()}</Text>
                        <Text style={styles.item}></Text>
                    </Pressable>
                )
            }}
        />

    </View>
</SafeAreaView>
  );
};

export default Home;
