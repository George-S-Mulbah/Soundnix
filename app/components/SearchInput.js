import React,{useState}from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles"
import colors from '../config/colors';


function SearchInput({ icon,width="100%",pass,padding ,br,m, eyes=false, ...otherProps }) {
  return (
    
    <View style={[styles.container, 
        { width },
        {padding},
         {borderRadius:br,margin:m},
        {backgroundColor:colors.black},{borderColor:colors.brandColor,borderWidth:0.2}]}>
             <MaterialCommunityIcons
          name="close"
          size={25}
          color={defaultStyles.colors.brandColor}
          style={styles.icon}
        />
            <TextInput
            placeholderTextColor={defaultStyles.colors.medium}
            style={[defaultStyles.text,styles.AppTextInputStyle]}
            secureTextEntry={eyes}
            {...otherProps}    
            placeholder="Search More"  
          />
          <View style={{paddingRight:25}}>
     <TouchableOpacity>

      <MaterialCommunityIcons
          name={icon}
          size={25}
          color={defaultStyles.colors.brandColor}
          style={styles.icon}
        />
     </TouchableOpacity>
        </View>
    </View>
  )
}
export default SearchInput;
const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        padding: 20,
        marginVertical: 10,
        elevation: 10,
        height:45,
        
      },
    
      AppTextInputStyle :{
         width:"80%",
         color:colors.light,
      },
      icon: {
        marginRight: 0,
        paddingVertical: 10,
        paddingLeft:5,
      },   
})