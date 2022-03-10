import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Search() {

const navigation = useNavigation()

 return (
        <View style={styles.header}>
            <View>
                <Text style={styles.title}></Text>
            </View>

        <Animatable.View
            animation='pulse'
            iterationCount={Infinity}
        >
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                <MaterialIcons name="search" size={50} color="#fcba03"/>
            </TouchableOpacity>
        </Animatable.View>
    </View>
  );
}