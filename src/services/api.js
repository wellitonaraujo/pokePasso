import axios from 'axios';
 
export const getPokemons = async (offset, limit) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?${offset}=20&${limit}=20`)

    return [...response.data.results];
}