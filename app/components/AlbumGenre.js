import { StyleSheet, Text, TouchableOpacity, View ,Image, ImageBackground} from 'react-native'
import React from 'react'
import colors from '../config/colors';

const data = {
    genreName:'Hip-pop'
}

 function AlbumGenre({data}) {
  return (
    <TouchableOpacity>
        <View style={styles.container}>

      <ImageBackground source={require('../assets/genre/Hip-pop.png')} resizeMode="cover" 
      style={styles.image}
      imageStyle={{borderRadius:6,opacity:0.6}}
      >
      <Text style={styles.genreName}>{data.genreName}</Text>
      <View></View>
      </ImageBackground>
        </View>

    </TouchableOpacity>
  )
}

export default AlbumGenre;

const styles = StyleSheet.create({
 container:{
    width:150,
    height:100,  
   
 },
     
genreName :{
padding:10,
fontSize:20,
color: colors.dark,
fontWeight:"bold",
textShadowColor:colors.dark
},

line:{
    width:'100%',
    height:2,
    backgroundColor:"yellow",
    bottom:-56,
  
    borderRadius:0
}
,
image:{
 width:150,
 height:100,
 position:'absolute',
 borderRadius:10,
 backgroundColor:colors.light,
flex: 1,
// transform: [{rotate:'180deg'}]
}
})