import React, {useState, useEffect} from 'react';
import { View, FlatList } from 'react-native';

import { getPokemons } from '../../services/api';
import Carditem from '../Carditem';
import Loading from '../Loading';

export default function Card() {
  const [loading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState([]);
  const [offset, ] = useState(0);
  const [limit, ] = useState(2000);

  useEffect(() => {
    setLoading(true);

    getPokemons(offset,limit)
    .then(pokemons => {
      const pokemonList = pokemons.map((pokemon, pokemonId) => {
        return {
              name: pokemon.name,
              id: calPokemonId(pokemonId + offset +1),
            }
      })
      setLoading(false);
      setPokemon((item) => [...item, ...pokemonList])

    }).catch(error => console.log(error))
    
  }, [offset])

const calPokemonId = id => {
  let pokemonId

  if (id <= 9) { pokemonId = `00${id}`

  } else if (id < 100) { pokemonId = `0${id}`

  } else { pokemonId = id }
  
  return pokemonId
}

 if(loading) {
   return <Loading />
 } else {
  return (
    <View>
         <FlatList 
            showsVerticalScrollIndicator={false}
            data={pokemon}
            numColumns={3}
            keyExtractor={ (item, id) => `${item.name} + ${id}` }
            renderItem={ ({ item }) => <Carditem name={item.name} id={item.id}/>}
         />
    </View>
   );
 }

}