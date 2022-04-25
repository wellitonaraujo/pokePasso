import axios from 'axios';
import { BASE_URL } from '../constants/constants';

const api = axios.create({
    baseURL: BASE_URL,
});

export default api;

// Get pokemons list 
export const getPokemons = async (offset, limit) => {
    const response = await axios.get(`${BASE_URL}?offset=${offset}&limit=${limit}`)
    return [...response.data.results];
}

// export const getPokemon = async (name) => {    
//         const typeList = []
//         const abilitiesList = []
//         const statsList = []
  
//       const response = await axios.get(`${name}`)
//       .then((res) => {
//         res.data.types.map(res => typeList.push(res.type.name))
//         res.data.abilities.map(res => abilitiesList.push(res.ability.name))
//         res.data.stats.map(res => statsList.push(res.base_stat))
          
//            return{
//               id: route.params.id,
//               name: route.params.name, 
//               type: typeList, 
//               height: res.data.height,
//               weight: res.data.weight,
//               abilitie1: abilitiesList[0],
//               abilitie2: abilitiesList[1],
//               stats1: statsList[0],
//               stats2: statsList[1],
//               stats3: statsList[2],
  
//            };
  
//       })
     

// }