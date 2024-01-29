import { SafeAreaView, StyleSheet, Text, View, StatusBar, FlatList } from 'react-native';
import Person from './src/components/Person/Person';
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  SingleDay_400Regular,
  Poppins_300Light
} from '@expo-google-fonts/dev';
import { FlatList } from 'react-native-web';

export default function App() {
  const peopleList = [
    { id: '1', name: 'Carlos', age: 37 },
    { id: '2', name: 'vini', age: 18 },
    { id: '3', name: 'Guti', age: 17 },

  ]


  let [fontsLoaded,] = useFonts({
    SingleDay_400Regular,
    Poppins_300Light
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView>
        <StatusBar />

        <FlatList
          data={peopleList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Person name={item.name} age={item.age} />
          )}
        />




      </SafeAreaView>

    );
  }
}



