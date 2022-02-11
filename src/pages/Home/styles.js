import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:  '#1c1c1c'
    },
    card: {
      width: 180,
      height: 160,
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      backgroundColor: '#fff',
      marginTop: 14,
      marginLeft: 8,
      marginRight: 8,
      borderRadius: 10,
    },
    pokemonImage: {
      width: 120,
      height: 120,
    },

    name:{
      fontSize: 18,
      color: '#C03028',
      fontWeight: '500'
    },
});

export default styles;

