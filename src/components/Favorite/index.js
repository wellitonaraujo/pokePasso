import React from 'react';
import { Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../../pages/Pokemon/styles';

export default function Favorite() {
  const navigation = useNavigation()
  
 return (
   <>
      <Pressable style={styles.myfavoriteBtn} onPress={() => navigation.navigate('FavoriteList')}>
        <Text style={styles.text}>Favoritos</Text>
      </Pressable>
   </>
  );
}