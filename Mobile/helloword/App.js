import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Word</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',

    
  },

  title: {
    color:'white',
    backgroundColor: 'purple',
    fontSize:50,
    borderColor:'white',
    borderWidth:5,
    padding:30,
    borderRadius: 10,

    





    
    
  }
});
