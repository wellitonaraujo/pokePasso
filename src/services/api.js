import axios from 'axios';
import { BASE_URL} from '../constants/constants';

// Get pokemons list 
export const getPokemons = async (offset, limit) => {
    const response = await axios.get(`${BASE_URL}?offset=${offset}&limit=${limit}`)
    return [...response.data.results];
}

// get pokemon details
export const getPokemon = async (id) => {    
    const response = await axios.get(`${BASE_URL}/${id}`)
        return response;
}