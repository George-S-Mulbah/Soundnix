import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchInput from '../components/SearchInput'
import Screen from '../components/Screen'
import AlbumGenre from '../components/AlbumGenre'

export default function SearchScreen() {
  return (
    <Screen>
          <>
          <View>
            <SearchInput  br={12} m={10} width="94%" icon="magnify"/> 
          </View>
          <View>
          <Text> Discover</Text>
          <FlatList/>

          </View>
          </>
          

    </Screen>
    
  )
}

const styles = StyleSheet.create({})