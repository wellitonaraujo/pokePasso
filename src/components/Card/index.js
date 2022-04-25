import React, {useState, useEffect} from 'react';
import { View, FlatList } from 'react-native';

import api from '../../services/api';
import Carditem from '../Carditem';

export default function Card(item) {

  const [loading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);

  const limit = 1118

  const fethPokemon = () => {
    setLoading(true);

    api.get(`?offset=${offset}&limit=${limit}`)
       .then(pokemons => {
        const pokemonList = pokemons.data.results.map((pokemon, pokemonId) => {
          return {
                name: pokemon.name,
                id: calPokemonId(pokemonId + offset + 1),
            }
        })
        setLoading(false);
        setPokemon((item) => [...item, ...pokemonList])

    }).catch(error => {
        console.log(error)
    })
}

useEffect(() => {
  fethPokemon()
}, [offset])

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
   <View>
        <FlatList 
            showsVerticalScrollIndicator={false}
            data={pokemon}
            numColumns={2}
            keyExtractor={ (item, id) => ` ${item.name} + ${id}` }
            renderItem={ ({ item }) => <Carditem name={item.name}/>}
        />
   </View>
  );
}