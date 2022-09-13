import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

import LottieView from 'lottie-react-native';
import colors from '../config/colors';
import Screen from './Screen';

function ActivityIndicator({visible = false}) {
   if(!visible) return null;
  return (
 

     <View style={styles.overlay}>
     <LottieView 
      autoPlay
      style={styles.lottieView}
      loop
      source={require('../assets/animations/loader.json')}
     />
     </View>
  

  )
}

const styles = StyleSheet.create({
    overlay:{

          backgroundColor:colors.white,
          width:"100%",
          height:"100%",
          position:'absolute',
          opacity:0.9,
          elevation:2,
    }
});

export default ActivityIndicator;