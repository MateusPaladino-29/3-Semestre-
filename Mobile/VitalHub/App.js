import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Montserrat_700Bold,
  Quicksand_600SemiBold,
  Quicksand_500Medium,
  MontserratAlternates_600SemiBold,
  MontserratAlternates_500Medium

} from '@expo-google-fonts/dev';
import { navegacao } from './src/screens/Navegacao/Navegacao';
import { Login,} from './src/screens/Login/Login';


const Stack = createNativeStackNavigator()

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Quicksand_600SemiBold,
    Quicksand_500Medium,
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    

    
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    return (

      //container =: envolve toda a estutrura de navegacao
      //navigator: componente para a navegacao
      //screen: tela 
      //name:nome da tela 
      //component: component que sera chamado
      //options(title): titulo da tela


      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Navegacao"
            component={navegacao}
            options={{title: "Navegacao" }}
          />

          <Stack.Screen
            name="Login"
            component={Login}
            options={{title: "Login" }}
          />
        </Stack.Navigator>
      </NavigationContainer>

      // <StatusBar style="auto" />

    );
  }
}

