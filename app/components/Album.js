import { View, Text , StyleSheet,Image } from 'react-native'
import React from 'react'
import colors from '../config/colors'



 
 function Album() {
  return (
    <View  style={styles.container}>
      {/* <Image source={{uri:}} style={styles.img} /> */}
      <Text style={styles.text}>Album</Text>
    </View>
  )
}

export default Album;


const styles = StyleSheet.create({
 container:{
  
 },
 img:{

 },

 text:{
  color:colors.light
}
})