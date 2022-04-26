import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:  '#1c1c1c'
    },
    card: {
      width: 123,
      height: 150,
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      backgroundColor: '#fcba03',
      marginTop: 10,
      marginLeft: 5,
      marginRight: 5,
      borderRadius: 10,
    },

    id:{
      fontSize: 12,
      marginLeft: 70,
      color: '#f0f0f0',
      letterSpacing: 2,
      backgroundColor: '#fff',
      borderRadius: 8,
      fontWeight: '600',
      paddingHorizontal: 5,
      color: '#1c1c1c'
    },

    pokemonImage: {
      width: 90,
      height: 90,
    },

    name:{
      fontSize: 13,
      color: '#f0f0f0',
      fontWeight: '700',
      letterSpacing: 2,
    },
});

export default styles;

