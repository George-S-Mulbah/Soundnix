import { StyleSheet, Text, View , ImageBackground ,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import Screen from '../../components/Screen'
import colors from '../../config/colors'
import { MaterialCommunityIcons } from "@expo/vector-icons";
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
      </ImageBackground>
      <View style={styles.profileImageContainer}>
      <View style={styles.profileImage}>
      <View  style={styles.BorderProfile}>
            <Image source={{uri:'https://images.unsplash.com/photo-1535146851324-6571dc3f2672?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fFIlMjZifGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'}} 
             style={{width:'100%' , height:'100%', borderRadius:50}} 
             />
        </View>
      </View>
         <View  style={styles.userDetails}>
        <Text   style={styles.userName}>George S Mulbah</Text>
         <View style={styles.verify}>
         <MaterialCommunityIcons
                  color={colors.brandColor}
                  name="checkbox-marked-circle"
                  size={20}
                />
         </View>
         </View>
        <View  style={styles.userFollower_followingContainer}>
         <View  style={styles.userFollower}>
        <Text   style={styles.userNumberOffollowers}>2M</Text>
        <Text   style={styles.userNumberOffollowersText}>followers</Text>
        </View>
        <View>
            <Text style={styles.userFollowerDot}>.</Text>
        </View>
        <View  style={styles.userFollower}>
        <Text   style={styles.userNumberOffollowersText}>following</Text>
        <Text   style={styles.userNumberOffollowing}>0</Text>
        </View>
       
        </View>
      </View> 
      
     </View>
    </Screen>
   
  )
}

const styles = StyleSheet.create({
container:{
    height:150,
    backgroundColor:"red",
},

userNumberOffollowing:{
    color:colors.brandColor,
    fontWeight:"bold",
    marginLeft: 10,
    marginTop:1.2,
},

userFollowerDot:{
color:colors.brandColor,
marginLeft:10,
marginRight:5,
fontSize:20,
fontWeight:"bold",
marginTop:-9,

},
userFollower_followingContainer:{
 marginTop:10,
 flexDirection:"row",
},

verify:{
    marginTop:5,
},
userNumberOffollowersText:{
    marginLeft:5,
    color:colors.light
},
userNumberOffollowers:{

color:colors.brandColor,
fontWeight:"bold",
marginLeft: 10,
},
userFollower:{
flexDirection:"row"
},
userDetails:{
marginTop:10,
marginLeft:10,
flexDirection:"row"
},


userName:{
color:colors.light,
fontSize:20,
fontWeight:"bold"
}
,
profileImage:{
height:115,
width:115,
marginTop:-60,
marginLeft:20,
backgroundColor:colors.black,
borderRadius:0.5*115,
borderWidth:2.5,
alignItems:"center",
justifyContent:"center",
borderColor: colors.black
},
BorderProfile:{
    height:100,
    width:100,
    backgroundColor:"red",
    borderColor: colors.brandColor,
    borderRadius:0.5*100,
    borderWidth:1,
   
   
}
,

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


},

profileImageContainer:{
    backgroundColor:colors.black,
    height:160,
}
    
})