
import React, { useEffect, useState } from 'react';

import styles from './styles';

import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  Image,
  Pressable,
  ActivityIndicator,
} from 'react-native';

import api from  '../../services/api'


import { useNavigation } from '@react-navigation/native';

const Home = () => {

  const navigation = useNavigation()


  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);


  const limit = 15;

// hook que será chamado quando nossos pokemons forem montados na tela
useEffect(() => {

  const fethPokemon = () => {

    setLoading(true);

    api.get(`?offset=${offset}&limit=${limit}`).then(pokemons => {

        const pokemonList = pokemons.data.results.map((pokemon, pokemonId) => {
            
          return {
                name: pokemon.name,
                id: calPokemonId(pokemonId + offset + 1),
            }
        })

        setLoading(false);
        
        setPokemon((prev) => [...prev, ...pokemonList])
    }).catch(error => {
      
        setLoading(false);
    })
}

fethPokemon()
}, [offset])


const loadPokemon = () => {
  setOffset((prev) => prev + limit)
}

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

renderFooter = () => {
  if (!loading) return null;
  return (
    <View>
      <ActivityIndicator />
    </View>
  );
};


  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={[styles.container, styles.background]}>
        <FlatList 
            showsVerticalScrollIndicator={false}
            style={{ flex: 1}}
            data={pokemon}
            renderItem={ ({item}) => {
                return(
                    <Pressable style={[styles.card]} onPress={() =>
                        navigation.navigate('PokemonInformation', { name: item.name, id: item.id })}>
                        <Image
                            style={styles.pokemonImage}
                            source={{
                                uri: `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${item.id}.png`,
                            }}
                            
                        />
                        <Text style={styles.title}>{item.id}. {item.name}</Text>
                        <Text style={styles.item}></Text>
                    </Pressable>
                )
            }}
            keyExtractor={item => item.id.toString()}
            onEndReached={() => loadPokemon()}
            onEndReachedThreshold={0.1}
            ListFooterComponent={() => renderFooter()}
        />
        {/* <Pressable style={styles.favoriteButton} onPress={() => navigation.navigate('FavoriteList')}>
            <Text style={styles.text}>Ir para os favoritos</Text>
        </Pressable> */}
    </View>
</SafeAreaView>
  );
};



export default Home;
