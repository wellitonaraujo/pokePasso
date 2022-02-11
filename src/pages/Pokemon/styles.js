import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   
    highlight: {
      fontWeight: '700',
    },
    item: {
      fontSize: 40,
      marginTop: 0,
      color: '#fff',
    },
    container: {
      flex: 1,
      paddingTop: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    pokemonImage: {
      width: 250,
      height: 250,
    },
    card: {
      flex: 1,
      padding: 40,
      color: '#222',
      // marginTop: 15,
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      // borderRadius: 20,
      position: 'relative',
      backgroundColor: '#DEF3FD',
    },

    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
    background: {
      backgroundColor: 'white'
    },
    title: {
      fontSize: 32,
    },
    steel: {
      backgroundColor: '#B8B8D0',
    },
  
    fire: {
      backgroundColor: '#FA6C6C',
    },
  
    grass: {
      backgroundColor: '#48CFB2',
    },
  
    electric: {
      backgroundColor: '#FFCE4B',
    },
  
    water: {
      backgroundColor: '#6890F0',
    },
  
    ground: {
      backgroundColor: '#E0C068',
    },
  
    rock: {
      backgroundColor: '#B8A038',
    },
  
    fairy: {
      backgroundColor: '#EE99AC',
    },
  
    poison: {
      backgroundColor: '#A040A0',
    },
  
    bug: {
      backgroundColor: '#A8B820',
    },
  
    dragon: {
      backgroundColor: '#7038F8',
    },
  
    psychic: {
      backgroundColor: '#F85888',
    },
  
    flying: {
      backgroundColor: '#A890F0',
    },
  
    fighting: {
      backgroundColor: '#C03028',
    },
  
    normal: {
      backgroundColor: '#A8A878',
    },
    colunaDados: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      // margin: 2,
    },
    pokemonItem: {
      fontSize: 23,
      marginTop: 5,
      padding: 10,
      color: '#fff',
      width: '50%' // is 50% of container width
    },
});

export default styles;

