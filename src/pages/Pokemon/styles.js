import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    card: {
      flex: 1,
      padding: 10,
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },

    name: {
      color: '#fff',
      fontSize: 38,
      fontWeight: 'bold',
      letterSpacing: 4,
      marginTop: 50,
    },
     
    pokemonImage: {
      width: 280,
      height: 280,
    },

    typeContainer: {
      marginBottom: 20,
      backgroundColor: '#fff',
      paddingHorizontal: 30,
      borderRadius: 40,
      padding: 5,

    },

    type: {
      fontSize: 20,
      // marginBottom: 15,
      color: '#fcba03',
      fontWeight: 'bold',
      letterSpacing: 2
    },


    informationsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: 20,
      paddingLeft: 30,
      paddingBottom: 15,
      marginBottom: 40,
    },

    pokemonInfo: {
      fontSize: 20,
      marginTop: 10,
      paddingTop: 5,
      paddingBottom: 5,
      color: '#707070',
      width: '50%',
      fontWeight: '500',
      letterSpacing: 2
    
    },
    statsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 20,
      paddingBottom: 8,
      marginRight: 23,
    },
    pokemonStats1: {
      marginRight: 15,
      fontSize: 23,
      letterSpacing: 1,
      fontWeight: '700',
      color: '#00ff26',
    },
    pokemonStats2: {
      marginRight: 15,
      fontSize: 23,
      letterSpacing: 1,
      fontWeight: '700',
      color: '#c41d1d'
    },
    pokemonStats3: {
      marginRight: 15,
      fontSize: 23,
      letterSpacing: 1,
      fontWeight: '700',
      color: '#ff5e00'
    }
});

export default styles;

