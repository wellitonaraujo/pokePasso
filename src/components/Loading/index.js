import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export default function Loading() {
 return (
    <View style={{  alignItems: 'center', justifyContent: 'center', flex: 1 }}> 
    <ActivityIndicator 
      color='#212121' size={70}
    />
  </View>
  );
}