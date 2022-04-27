import React from 'react';
import {Text, View} from 'react-native';
import * as Animatable from 'react-native-animatable';

import styles from '../../pages/Pokemon/styles';


export default function MyFavorite({ pokemon }) {
 return (
       <View style={styles.card}>
            <Animatable.Text 
                animation='fadeInUp'
                style={styles.name}>{pokemon.name}
            </Animatable.Text>
                                
            <Animatable.Image
                animation='pulse'
                iterationCount={Infinity}
                style={styles.pokemonImage}
                source={{uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.id}.png`}}>
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
        </View>

  );
}