/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  Linking,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  RefreshControl,
  FlatList,
  SectionList
} from 'react-native';

const App = () => {

  const [items, setItems] = useState([
    {name: "item1"},
    {name: "item2"},
    {name: "item3"},
    {name: "item4"},
    {name: "item5"},
    {name: "item6"},
    {name: "item7"},
    {name: "item8"},
    {name: "item9"},
    {name: "item10"},
    {name: "item11"},
  ])

  const [data, setData] = useState([
    {
      title: 'title 1',
      data: ['item 1-1', 'item 1-2', 'item 1-3']
    },
    {
      title: 'title 2',
      data: ['item 2-1', 'item 2-2', 'item 2-3']
    }
  ])

  const [refreshing, setRefreshing] = useState(false)
  let lastIndex = data.length
  const onRefresh = () => {
    setRefreshing(true); 
    setData((state)=> [...state, {title: `title ${lastIndex+1}`, data: [`item ${lastIndex+1}-1`, `item ${lastIndex+1}-2`, `item ${lastIndex+1}-3`]}]);
    setRefreshing(false);
  }

  return (

    <SectionList 
      keyExtractor={(item, index) => index.toString()}
      sections={data}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.text}>{item}</Text>
        </View>
      )}

      renderSectionHeader={({section}) => (
        <View style={styles.title}>
          <Text style={styles.text}>{section.title}</Text>
        </View>
      )}

      refreshControl={
        <RefreshControl 
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    />
    
    // <FlatList 
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={refreshing}
    //       onRefresh={onRefresh}
    //     />
    //   }
    //   keyExtractor={(item, index) => index.toString()}
    //   data={items}
    //   renderItem={({item}) => (
    //     <View style={styles.item}>
    //         <Text style={styles.text}>{item.name}</Text>
    //     </View>
    //   )}
    // />

    // <ScrollView 
    //   style={styles.body}
    //   refreshControl={
    //     <RefreshControl 
    //       refreshing={refreshing}
    //       onRefresh={onRefresh}
    //       colors={['#00ff00', '#ff02cc']}
    //     />
    //   }
    // >
    //     {
    //       items.map((item, index)=> {
    //         return(
    //           <View style={styles.item}>
    //             <Text key={index} style={styles.text}>{item.name}</Text>
    //           </View>
    //         )
    //       })
    //     }
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white'
  },
  item: {
    flex:1,
    flexDirection: 'column',
    // paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#000000'
  },
  title: {
    marginVertical: 10,
    marginHorizontal: 5,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: '#0000ff'
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    textTransform: 'capitalize',
    color: 'black',
    fontStyle: 'italic',
    fontWeight: '500'
  }
});

export default App;
