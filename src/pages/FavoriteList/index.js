import React, { useEffect, useState } from 'react';
import {ScrollView, Text, View, Image, Pressable, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from '../Pokemon/styles';
import MyFavorite from '../../components/MyFavorite';

const FavoriteList = () => {
    const navigation = useNavigation()
    const [pokemons, setPokemons] = useState(['']);

    useEffect(() => {
        favoritePokemon(),
        removeFavorito()
    }, []);

    const favoritePokemon = async () => {
        try {
            const value = await AsyncStorage.getItem('pokemon');
            if (value !== null) {
                setPokemons(JSON.parse(value));

                if (value.length === 2) {
                    Alert.alert('Ops...', 'Adicione um pokemon a lista de favoritos primeiro!');
                    navigation.navigate('PokemonList');
                }
            } 
        } catch (e) {
            console.error(e);
        }
    }

    const removeFavorito = async (name) => {
        try {
          const value = await AsyncStorage.getItem('pokemon');

          const pokemons_db = JSON.parse(value);
          const pokemon_no_delete = pokemons_db.filter(pokemon => pokemon.name !== name);

          setPokemons(pokemon_no_delete);

          const new_db = JSON.stringify(pokemon_no_delete);
          await AsyncStorage.setItem('pokemon', new_db);

        } catch(e) {console.error(e)}
    }
    return (
        <ScrollView>
            <View style={[styles.card]}>
                <View>
                    {pokemons.map((pokemon, index) => { 
                        return (
                            <>
                                <MyFavorite key={index} pokemon={pokemon}/>
        
                                <Pressable style={styles.favoriteBtn} onPress={() => removeFavorito(pokemon.name)}>
                                    <Text style={styles.text}>Remover dos Favoritos</Text>
                                </Pressable>
                            </>
                        )
                        })}
                </View>
            </View>
        </ScrollView>
    )
}

export default FavoriteList;