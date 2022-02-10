import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
    item: {
      fontSize: 30,
      marginTop: 5,
      color: '#666',
    },
    container: {
      flex: 1,
      paddingTop: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    pokemonImage: {
      width: 200,
      height: 200,
    },
    card: {
      flex: 1,
      padding: 30,
      color: '#222',
      marginTop: 15,
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
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
      fontSize: 30,
      marginTop: 30,
    },



    steel: {
      backgroundColor: '#417d9a',
    },
  
    fire: {
      backgroundColor: '#fd7d24',
    },
  
    grass: {
      backgroundColor: '#556aae',
    },
  
    electric: {
      backgroundColor: '#eed535',
    },
  
    water: {
      backgroundColor: '#4a90da',
    },
  
    ground: {
      backgroundColor: '#dd7748',
    },
  
    rock: {
      backgroundColor: '#baab82',
    },
  
    fairy: {
      backgroundColor: '#ed6ec7',
    },
  
    poison: {
      backgroundColor: '#a552cc',
    },
  
    bug: {
      backgroundColor: '#8cb230',
    },
  
    dragon: {
      backgroundColor: '#0f6ac0',
    },
  
    psychic: {
      backgroundColor: '#ea5d60',
    },
  
    flying: {
      backgroundColor: '#748fc9',
    },
  
    fighting: {
      backgroundColor: '#d04164',
    },
  
    normal: {
      backgroundColor: '#9da0aa',
    },
    colData: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20,
    },
    pokemonItem: {
      fontSize: 20,
      marginTop: 5,
      padding: 10,
      color: '#666',
      width: '50%' // is 50% of container width
    },

});

export default styles;

