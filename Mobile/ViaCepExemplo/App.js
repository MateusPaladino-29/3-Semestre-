import { StatusBar } from 'react-native';
import { Header } from './Src/Components/Header/Index';
import { ContainerApp } from './Style';

import {
  useFonts,
  Roboto_500Medium,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';


export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    Roboto_500Medium,
    Roboto_400Regular,
    Roboto_700Bold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ContainerApp>
      <Header />
    </ContainerApp>
  );

}


