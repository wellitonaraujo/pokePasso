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
    }
   
});

export default styles;

