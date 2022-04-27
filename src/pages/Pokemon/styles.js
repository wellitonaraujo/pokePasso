import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    card: {
      flex: 1,
      padding: 7,
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      backgroundColor: '#1c1c1c'
    },

    name: {
      color: '#fff',
      fontSize: 28,
      fontWeight: 'bold',
      letterSpacing: 4,
      // marginTop: 50,
      textTransform: 'uppercase'
    },
     
    pokemonImage: {
      width: 200,
      height: 200,
    },

    typeContainer: {
      marginBottom: 20,
      backgroundColor: '#fff',
      paddingHorizontal: 30,
      borderRadius: 20,
      padding: 5,

    },
    containerBtn: {
      marginBottom: 7,
      flexDirection: 'row',
      justifyContent: 'center',
      // marginHorizontal: 100,
  
    },

    favoriteBtn: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
      paddingHorizontal: 22,
      borderRadius: 20,
      elevation: 3,
      backgroundColor: '#d61132',
      borderColor: '#000',
      borderEndColor: 2
    },
    myfavoriteBtn: {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      paddingVertical: 10,
      paddingHorizontal: 22,
      borderRadius: 20,
      elevation: 3,
      backgroundColor: '#ff5e00'
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },

    type: {
      fontSize: 20,
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
      borderRadius: 15,
      paddingLeft: 35,
      paddingBottom: 15,
      marginBottom: 40,
    },

    pokemonInfo: {
      fontSize: 17,
      marginTop: 10,
      paddingTop: 5,
      paddingBottom: 5,
      color: '#707070',
      width: '50%',
      fontWeight: '400',
      letterSpacing: 2,
    },
    
    ability: {
      width: 160,
      fontSize: 15,
      letterSpacing: 1,
      fontWeight: '600',
      backgroundColor: '#00ff26',
      borderRadius: 8,
      padding: 2,
      color: '#fff',
      paddingHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      textTransform: 'uppercase'
    },

    statsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 20,
      marginRight: 23,
    },
    pokemonStats1: {
      marginRight: 5,
      fontSize: 12,
      letterSpacing: 1,
      fontWeight: '700',
      backgroundColor: '#00ff26',
      borderRadius: 8,
      padding: 4,
      color: '#fff',
    },
    pokemonStats2: {
      marginRight: 5,
      fontSize: 12,
      letterSpacing: 1,
      fontWeight: '700',
      backgroundColor: '#c41d1d',
      borderRadius: 8,
      padding: 4,
      color: '#fff',
    },
    pokemonStats3: {
      marginRight: 5,
      fontSize: 12,
      letterSpacing: 1,
      fontWeight: '700',
      backgroundColor: '#ff5e00',
      borderRadius: 8,
      padding: 4,
      color: '#fff',
    },
    pokemonStats4: {
      marginRight: 5,
      fontSize: 12,
      letterSpacing: 1,
      fontWeight: '700',
      backgroundColor: '#1c1c1c',
      borderRadius: 8,
      padding: 4,
      color: '#fff',
    },

    pokemonStats5: {
      marginRight: 5,
      fontSize: 12,
      letterSpacing: 1,
      fontWeight: '700',
      backgroundColor: '#1c1c1c',
      borderRadius: 8,
      padding: 4,
      color: '#fff',
    }
});

export default styles;

