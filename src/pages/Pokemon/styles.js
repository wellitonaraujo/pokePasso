import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    card: {
      flex: 1,
      padding: 20,
      // color: '#222',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },

    name: {
      color: '#fff',
      fontSize: 38,
      fontWeight: 'bold',
      letterSpacing: 2
    },
     
    pokemonImage: {
      width: 330,
      height: 330,
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
      paddingRight: 10,
      paddingLeft: 30,
    },

    pokemonInfo: {
      fontSize: 20,
      marginTop: 15,
      paddingTop: 5,
      paddingBottom: 5,
      color: '#707070',
      width: '50%',
      fontWeight: '600',
      letterSpacing: 2
    
    },
});

export default styles;

