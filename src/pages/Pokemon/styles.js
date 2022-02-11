import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    card: {
      flex: 1,
      padding: 40,
      color: '#222',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },

    name: {
      color: '#fff',
      fontSize: 45,
      fontWeight: 'bold'
    },
     
    pokemonImage: {
      width: 300,
      height: 300,
    },

    type: {
      fontSize: 25,
      marginBottom: 10,
      color: '#fff',
      fontWeight: 'bold'
    },


    informations: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
    },

    pokemonInfo: {
      fontSize: 23,
      marginTop: 5,
      padding: 10,
      color: '#fff',
      width: '50%',
    },
});

export default styles;

