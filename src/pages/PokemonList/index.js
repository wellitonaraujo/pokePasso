
import React, { useEffect, useState } from 'react';
import {SafeAreaView,View,StatusBar} from 'react-native';

import styles from './styles';
import Card from '../../components/Card';
import Loading from '../../components/Loading'

const PokemonList = () => {
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor='transparent' barStyle='light-content' translucent={true}/>
      <View style={styles.container}>
        <Card />
      </View>
      </SafeAreaView>
    );
  }

export default PokemonList;
