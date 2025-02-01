import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name: 'mario', id:'1'},
    {name: 'luigi', id:'2'},
    {name: 'yoshi', id:'3'},
    {name: 'toad', id:'4'},
    {name: 'bowser', id:'5'},
    {name: 'kamek', id:'6'},
    {name: 'peach', id:'7'},
    {name: 'daisy', id:'8'},
  ]);

  const pressHandler = (id) => {
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.id != id);
    })
  }

  return (
    <View style={styles.container}>
      
    <FlatList
      numColumns={2}
      keyExtractor={(item) => item.id} 
      data={people}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => pressHandler(item.id)}>
          <Text style={styles.item}>{item.name}</Text>
        </TouchableOpacity>
      )}  
    />
     
      <StatusBar style="auto" />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'lavender',
    fontSize: 24,
    marginHorizontal:10,
    marginTop: 24,
  }
 
});
