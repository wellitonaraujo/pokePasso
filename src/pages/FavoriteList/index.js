import React, { useEffect, useState } from 'react';
import {ScrollView, Text, View, Image, Pressable, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';

import styles from '../Pokemon/styles';

const FavoriteList = ({route}) => {
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
        } catch(e) {
          console.error(e);
        }
    }

    return (
        <ScrollView>
            <View style={[styles.container]}>
                <View style={{ flex: 1 }}>
                    {pokemons.map((pokemon, index) => {
                        return (
                            <View style={styles.card} key={index}>
                                 <Animatable.Text 
                                animation='fadeInUp'
                                style={styles.name}>{pokemon.name}
                                </Animatable.Text>
                                
                                <Animatable.Image
                                    animation='pulse'
                                    iterationCount={Infinity}
                                    style={styles.pokemonImage}
                                    source={{
                                        uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.id}.png`}}>
                                </Animatable.Image>                                
                                <View style={styles.informationsContainer}>
                                    <Text style={styles.pokemonInfo}>Altura: {pokemon.height / 10} m</Text>
                                    <Text style={styles.pokemonInfo}> Peso: {pokemon.weight / 10} kg</Text>
                                    <Text style={styles.pokemonInfo}>1º Habilidade</Text>
                                    <Text style={styles.ability}>{pokemon.abilitie1}</Text>
                                    <Text style={styles.pokemonInfo}>2º Habilidade</Text>
                                    <Text style={styles.ability}>{pokemon.abilitie2}</Text>

                                <View style={styles.statsContainer}>
                                    <Text style={styles.pokemonStats1}> HP {pokemon.stats1}</Text>
                                    <Text style={styles.pokemonStats2}> Def. {pokemon.stats2}</Text>
                                    <Text style={styles.pokemonStats3}>Atk. {pokemon.stats3}</Text>
                                    <Text style={styles.pokemonStats4}> Sp. Atk {pokemon.stats4}</Text>
                                    <Text style={styles.pokemonStats5}> Sp. Def {pokemon.stats5}</Text>
                                </View>  
                                </View>
                                <View style={{marginBottom: 70}}></View>
                                <Pressable style={styles.favoriteBtn} onPress={() => removeFavorito(pokemon.name)}>
                                    <Text style={styles.text}>Remover dos Favoritos</Text>
                                 </Pressable>
                            </View>
                            
                        )
                    })}
                </View>
            </View>
        </ScrollView>
    )
}

export default FavoriteList;