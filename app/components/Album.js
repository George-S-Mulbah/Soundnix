import { View, Text , StyleSheet,Image } from 'react-native'
import React from 'react'
import colors from '../config/colors'



 
 function Album({albumData}) {
 
 
  return (
    <View  style={styles.container}>
       <Image source={{uri:albumData.imageUri}} style={styles.img} /> 
      <Text style={styles.text}>{albumData.artistsHeadline}</Text>
    </View>
  )
}

export default Album;


const styles = StyleSheet.create({
 container:{
  width:155,
  margin:10,
 },
 img:{
 width:'100%',
 height:155,
 },

 text:{
  color:colors.light,
  marginTop:5,
}
})