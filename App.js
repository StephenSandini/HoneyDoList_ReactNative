import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name: 'mario', key:'1'},
    {name: 'luigi', key:'2'},
    {name: 'yoshi', key:'3'},
    {name: 'toad', key:'4'},
    {name: 'bowser', key:'5'},
    {name: 'kamek', key:'6'},
    {name: 'peach', key:'7'},
    {name: 'daisy', key:'8'},



  ])

  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map(item => (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          ))}
      </ScrollView>
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
    fontSize: 30,
  }
 
});
