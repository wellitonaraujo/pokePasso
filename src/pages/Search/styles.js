import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 
    container: {
      flex: 1,
      backgroundColor:  '#fff'
    },

    containerInput: {
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
      marginVertical: 14,
    },

    input: {
      backgroundColor: '#EBEBEB',
      marginLeft: 10,
      height: 50,
      width: '80%',
      borderRadius: 4,
      padding: 5,
    },

    buttonSearch: {
      backgroundColor: '#fcba03',
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
      width: '15%',
      marginLeft: 5,
      marginRight: 10,
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
      // paddingTop:5,
      // backgroundColor: "#1c1c1c",
      backgroundColor: '#fff'
     
      
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

