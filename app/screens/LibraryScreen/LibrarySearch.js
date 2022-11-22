import { StyleSheet, Text, View , FlatList } from 'react-native'
import React from 'react'
import Screen from '../../components/Screen'
import colors from '../../config/colors';
import SearchInput from '../../components/SearchInput';

import AlbumCategory from '../../components/AlbumCategory';


const acdata=[{
  id: '1',
  title: 'Recent Download',
  albums: [
    {
      id: '1',
      imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
      artistsHeadline: 'Taylor Swift, Kygo Objective C, Avicii'
    }, {
      id: '2',
      imageUri: 'https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg',
      artistsHeadline: 'Post Malone, Drake, Eminem'
    },
    {
      id: '3',
      imageUri: 'https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg',
      artistsHeadline: 'Journey, Escape, Avicii'
    },
    {
      id: '4',
      imageUri: 'https://i.pinimg.com/originals/a2/0d/37/a20d37791f8ad5cd54734cd3af559cc9.jpg',
      artistsHeadline: 'Bob Marley, Cardi B, Stas Mihailov'
    },
    {
      id: '5',
      imageUri: 'https://i.pinimg.com/originals/a2/0d/37/a20d37791f8ad5cd54734cd3af559cc9.jpg',
      artistsHeadline: 'Bob Marley, Cardi B, Stas Mihailov'
    },
  ]
}]
function LibrarySearch() {
  return (
    <Screen>
    <Text style={styles.pageTitle}>Library Screen</Text>
    <SearchInput br={12} m={5} width="94%" icon="magnify" />
    <FlatList 
     data={acdata}
     renderItem={({item})  => <AlbumCategory data={item}/> }
     keyExtractor={(item) => item.id}
     />
    </Screen>
  )
}

export default LibrarySearch;

const styles = StyleSheet.create({
pageTitle:{
  color:colors.light,
  marginTop:0,
  marginLeft:10,
  fontSize:20,
  fontWeight:"bold"
}

})