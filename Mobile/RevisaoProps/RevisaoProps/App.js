import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import Person from './src/components/Person/Person';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar/>

      <Person name='Vini' age={18}/>
      <Person name='Edu' age={18}/>
      <Person name='guti' age={17}/>
      <Person name='Mateus' age={17}/>
     

    </SafeAreaView>

  );
}



