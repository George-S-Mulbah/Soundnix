import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors';
import Screen from '../components/Screen';
import Album from '../components/Album';

 function HomeScreen() {
  return (
    <Screen style={styles.container}>
     <Album/>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.black,
    flex:1,
    alignItems:"center",
    justifyContent:"center",
  }
})


export default HomeScreen;