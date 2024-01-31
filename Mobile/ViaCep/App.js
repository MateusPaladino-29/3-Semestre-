import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';


import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Roboto_500Medium,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/dev';

import { Container, ContainerHeader, HomeScreen } from './Src/Components/Container/Container';



export default function App() {

  let [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    return (
      <Container>
        <ContainerHeader>

        </ContainerHeader>

        <HomeScreen>


        </HomeScreen>

        <StatusBar style="auto" />
      </Container>
    );
  }
}

