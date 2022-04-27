import React from 'react';
import { Pressable, Text } from 'react-native';

import styles from '../../pages/Pokemon/styles';

export default function ButtonRemove() {
  
 return (
    <>
        <Pressable style={styles.favoriteBtn}>
            <Text style={styles.text}>Remover dos Favoritos</Text>
        </Pressable>
   </>
  );
}