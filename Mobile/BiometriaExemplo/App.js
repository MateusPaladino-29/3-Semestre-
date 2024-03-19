import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import   AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import moment from "moment";

export default function App() {
  //salvar a referencia de suporte a biometria
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  //salvar referencias de suporte a Biometria
  const [authenticated, setAuthenticated] = useState(false);

  const [dateHistory, setDateHistory] = useState({}); //salvar o obj com historico

  //funcao para verificar se existe biometria no aparelho
  async function CheckExistAuthentications() {
    const compatible = await LocalAuthentication.hasHardwareAsync();

    //salvando o status de compatibilidade com a biometria
    setIsBiometricSupported(compatible);
  }

  async function SetHistory(params) {
    const objAuth = {
      dataAuthentication: moment().format('DD/MM/YYYY HH:mm:ss'),
    };

    await AsyncStorage.setItem("authenticate", JSON.stringify(objAuth));
    setDateHistory(objAuth);
  }

  //Recebe o historico da ultima autenticacao
  async function GetHistory() {
    const objAuth = await AsyncStorage.getItem('authenticate')

    if (objAuth) {
      setDateHistory(JSON.parse(objAuth));
    }
  }
  async function HandleAuthentication() {
    //verificar se existe uma biometria cadastrada
    const biometricExist = await LocalAuthentication.isEnrolledAsync();

    if (!biometricExist) {
      return Alert.alert("Falha ao logar", "Nenhuma Biometria cadastrada ");
    }

    //caso exista =>
    const auth = await LocalAuthentication.authenticateAsync();
    setAuthenticated(auth.success);

    //verificar se esta autenticando e salvar data atual
    if (auth.success) {
      SetHistory();
    }
  }

  useEffect(() => {
    CheckExistAuthentications();
    GetHistory(); // Buscando a ultima atualizacao
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {isBiometricSupported
          ? "Seu dispositivo é compativel com a biometria "
          : "Seu dispositivo nao suporta Biometria/Face Id"}
      </Text>

      <TouchableOpacity
        style={styles.btnAuth}
        onPress={() => HandleAuthentication()}
      >
        <Text style={styles.txtAuth}>Autenticar Acesso</Text>
      </TouchableOpacity>

      <Text
        style={[styles.txtReturn, { color: authenticated ? 'green' : 'red' }]}
      >
        {authenticated ? "Autenticado" : "Nao Autendicado"}
      </Text>

      {
        dateHistory.dataAuthentication 
        ? <Text style={styles.txtHistory}>  
        Ultimo acesso em  {dateHistory.dataAuthentication} </Text> 
        : null
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 20,
    width: "70%",
    textAlign: "center",
    lineHeight: 30,
  },

  btnAuth: {
    padding: 16,
    borderRadius: 16,
    margin: 20,
    backgroundColor: "purple",
  },

  txtAuth: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold ",
  },
  txtReturn: {
    fontSize: 22,
    marginTop: 50,
  },

  txtHistory: {
    fontSize: 16,
    fontWeight: "bold",
    color: "858383",
    position: "absolute",
    bottom: 30,

  }
});
