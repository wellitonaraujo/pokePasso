import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:  '#fff'
    },
    card: {
      width: 190,
      height: 180,
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      backgroundColor: '#fcba03',
      marginTop: 10,
      marginLeft: 5,
      marginRight: 5,
      borderRadius: 10,
      paddingTop: 30,
    },

    id:{
      fontSize: 18,
      paddingTop: 5,
    },

    pokemonImage: {
      width: 120,
      height: 120,
    },

    name:{
      fontSize: 18,
      color: '#f0f0f0',
      fontWeight: '500',
      paddingBottom: 10
    },
});

export default styles;

