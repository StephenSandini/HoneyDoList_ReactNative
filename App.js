import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello, World</Text>
      </View>
      <View style={styles.body}>
        <Text>Lorem ipsum dolor sit amet.</Text>
        <Text>Lorem ipsum dolor sit amet.</Text>
        <Text>Lorem ipsum dolor sit amet.</Text>
        <Text>Lorem ipsum dolor sit amet.</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
//Styles are not typically inheritted like they are in css
//Nested or child text component/widget will inherit the style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'lavender',
    padding: 20,
  },
  boldText:{
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: 'orange',
    padding: 20,
    fontWeight: 'bold',
  }
});
