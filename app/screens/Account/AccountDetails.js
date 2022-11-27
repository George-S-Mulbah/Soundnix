import { StyleSheet, Text, View , ImageBackground ,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import Screen from '../../components/Screen'
import colors from '../../config/colors'
import { Entypo } from '@expo/vector-icons';


export default function AccountDetails() {
  return (

    <Screen>
     <View  style={styles.container}>
     <ImageBackground source={{uri:'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8UG9wJTIwbXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60'}} resizeMode="cover" 
      style={{width:'100%' , height:'100%',}}
      >
        <View style={styles.uploadIconContainer}>
         <TouchableOpacity>
         <Entypo name="camera" size={24} color="black" />
         </TouchableOpacity>
        </View>
        <View style={styles.profileImage}>
            <Image source={{uri:'https://images.unsplash.com/photo-1535146851324-6571dc3f2672?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fFIlMjZifGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'}} 
             style={{width:'100%' , height:'100%', borderRadius:50}} 
             />
        </View>
      </ImageBackground>
      
     </View>
    </Screen>
   
  )
}

const styles = StyleSheet.create({
container:{
    height:150,
    backgroundColor:"red",
},

profileImage:{
height:100,
width:100,
marginTop:45,
marginLeft:20,
backgroundColor:"blue",
borderRadius:50,
borderWidth:2,
borderColor: colors.brandColor
},

uploadIconContainer:{
    backgroundColor:colors.medium,
    width:50,
    height:50,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:25,
    position:"relative",
    opacity:0.4,
    top:20,
    marginLeft:230,


}
    
})