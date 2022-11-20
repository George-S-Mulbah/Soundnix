import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import Album from './Album'



export default function AlbumCategory({data}) {
  
  return (
    <View  style={styles.container}> 
      <Text style={styles.title}>{data.title}</Text>
      <FlatList
       data={data.albums}
       renderItem={({item}) => <Album albumData={item}/>}
       keyExtractor={(item) => item.id }
       showsHorizontalScrollIndicator={false}
       horizontal
      />    
    </View>
  )
}    


const styles = StyleSheet.create({
  container:{
   margin:10,
  },
  title:{
    color:colors.light,
    margin:10,
    fontSize:18,
    fontWeight:'bold'
  }
})