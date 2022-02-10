import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    sectionContainer: {
      paddingHorizontal: 10,
    },
    sectionTitle: {
      fontSize: 34,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 25,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
    item: {
      fontSize: 20,
      marginTop: 5,
      color: '#666',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "#000"
    },
    pokemonImage: {
      width: 120,
      height: 120,
    },
    pokemonImageDetails:{
      width: 150,
      height: 150,
    },

    card: {
      width: 180,
      height: 160,
      // flex: 1,

      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      backgroundColor: '#fff',
      marginTop: 14,
      marginLeft: 10,
      marginRight: 10,
      borderRadius: 10,
      
    },

    name:{
      fontSize: 18,
      // paddingTop: 10
      color: '#C03028',
      fontWeight: '500'
    },
    
    pokemonDetails:{
      
      color: '#222',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },

    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
    background: {
      // backgroundColor: 'white'
    },
    title: {
      fontSize: 24,
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

    colData: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
    },
    pokemonItem: {
      fontSize: 20,
      // marginTop: 5,
      padding: 10,
      color: '#fff',
      width: '50%' // is 50% of container width
    },

});

export default styles;

