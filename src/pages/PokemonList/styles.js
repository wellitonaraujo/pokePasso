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
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
      paddingTop: 10,
      paddingBottom:10,
      // backgroundColor: "#1c1c1c",
      borderBottomRightRadius: 20,
      borderBottomLeftRadius: 20,
     
      
    },

    headerLeft: {

    },

    title: {
      color: '#1c1c1c',
      fontSize: 26,
      fontWeight: 'bold'
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

