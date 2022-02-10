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
      width: 250,
      height: 250,
    },
    card: {
      flex: 1,
      padding: 40,
      color: '#222',
      marginTop: 15,
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
      position: 'relative',
      backgroundColor: '#DEF3FD',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'red',
      margin: 20,
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
      backgroundColor: '#f4f4f4',
    },
  
    fire: {
      backgroundColor: '#FDDFDF',
    },
  
    grass: {
      backgroundColor: '#DEFDE0',
    },
  
    electric: {
      backgroundColor: '#FCF7DE',
    },
  
    water: {
      backgroundColor: '#DEF3FD',
    },
  
    ground: {
      backgroundColor: '#f4e7da',
    },
  
    rock: {
      backgroundColor: '#d5d5d4',
    },
  
    fairy: {
      backgroundColor: '#fceaff',
    },
  
    poison: {
      backgroundColor: '#98d7a5',
    },
  
    bug: {
      backgroundColor: '#f8d5a3',
    },
  
    dragon: {
      backgroundColor: '#97b3e6',
    },
  
    psychic: {
      backgroundColor: '#eaeda1',
    },
  
    flying: {
      backgroundColor: '#F5F5F5',
    },
  
    fighting: {
      backgroundColor: '#E6E0D4',
    },
  
    normal: {
      backgroundColor: '#F5F5F5',
    },
    colunaDados: {
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
    favoriteButton: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 20,
      paddingHorizontal: 32,
      borderRadius: 20,
      elevation: 3,
      backgroundColor: '#c18f00',
      margin: 20,
    }
});

export default styles;

