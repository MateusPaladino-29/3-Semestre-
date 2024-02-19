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
  MontserratAlternates_500Medium,
  MontserratAlternates_700Bold,
  Quicksand_400Regular,

} from '@expo-google-fonts/dev';
import { navegacao } from './src/screens/Navegacao/Navegacao';
import { Login,} from './src/screens/Login/Login';
import { Senha } from './src/screens/Senha/Senha';
import { verificacao } from './src/screens/Verificacao/Verificacao';
import { NovaSenha } from './src/screens/NovaSenha/NovaSenha';
import { RedefinirSenha } from './src/screens/RedefinirSenha/RedefinirSenha';
import { Perfil } from './src/screens/Perfil/PerfilPaciente';
import { ProntuarioMedico } from './src/screens/ProntuarioMedico/ProntuarioMedico';
import { ConsultaMedico } from './src/screens/ConsultasMedico/ConsultaMedico';



const Stack = createNativeStackNavigator()

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Quicksand_600SemiBold,
    Quicksand_500Medium,
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    MontserratAlternates_700Bold,
    Quicksand_400Regular,
    

    
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

          <Stack.Screen
            name="Senha"
            component={Senha}
            options={{title: "Senha" }}
          />

          <Stack.Screen
            name="Verificacao"
            component={verificacao}
            options={{title: "verificacao" }}
          />

          <Stack.Screen
            name="RedefinirSenha"
            component={RedefinirSenha}
            options={{title: "RedefinirSenha" }}
          />

          <Stack.Screen
            name="NovaSenha"
            component={NovaSenha}
            options={{title: "NovaSenha" }}
          />

          <Stack.Screen
            name="Perfil"
            component={Perfil}
            options={{title: "Perfil" }}
          />

          <Stack.Screen
            name="ProntuarioMedico"
            component={ProntuarioMedico}
            options={{title: "ProntuarioMedico" }}
          />
          <Stack.Screen
            name="ConsultaMedico"
            component={ConsultaMedico}
            options={{title: "ConsultaMedico" }}
          />
        </Stack.Navigator>
      </NavigationContainer>

      // <StatusBar style="auto" />

    );
  }
}

