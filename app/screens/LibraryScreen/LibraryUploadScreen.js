import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from '../../components/Screen'
import AppButton from '../../components/AppButton'

import colors from '../../config/colors'
import LibraryButton from '../../components/LibraryScreenComponent/LibraryButton'
import SearchInput from '../../components/SearchInput'

export default function LibraryUploadScreen() {
  return (
    <Screen>
      <View  style={styles.container}>
        <View style={styles.libraryButton}>
         <LibraryButton  style={styles.playlistbutton}/>
         <LibraryButton 
         color='transparent'
         elevation={4} 
         ey={true} 
         iconName="plus" 
         mR={20}
          title='Album' 
          textColor='white' borderColor='white'/>
        </View>

        <SearchInput br={6} m={4} width="92%" icon="magnify"/>

      </View>
        
    </Screen>
    
  )
}

const styles = StyleSheet.create({
  playlistbutton:{
  flex:1
  },
  container:{
   marginLeft:15,
  },

  libraryButton:{
    flexDirection:"row",
    justifyContent:"space-between"

  }
})