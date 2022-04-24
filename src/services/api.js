import axios from 'axios';
import { baseURL } from '../constants';


export async function getPokemons(offset, limit) {
    const  response = await axios.get(`${baseURL}?offset=${offset}&limit=${limit}`)
    return [...response.data.results];
}

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/',
});

export default api;
