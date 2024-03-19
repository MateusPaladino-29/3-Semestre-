import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

//importar os recursos do expo
import * as Notifications from "expo-notifications";

//solicita permissoes de notificacao ao iniciar o app
Notifications.requestPermissionsAsync();

//define como as notificacoes devem ser tratas quando recebidas
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    //mostrar o alerta quando a motificacao for recebida
    shouldShowAlert: true,

    //reproduz som ao receber notificacao
    shouldPlaySound: true,

    //numero de notificacoes no icone do app
    shouldSetBadge: false,
  }),
});

export default function App() {
  //funcao para lidar com uma chamada de notificacao
  const handleCallNotification = async () => {
    //obtem o status da permissao
    const { status } = await Notifications.getPermissionsAsync();

    if (status !== "granted") {
      alert("Voce nao deixou as notificacoes ativas");
      return;
    }

    //Agenda uma notificacao 
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Bem vinde",
        body: "Notificacao recebide",
        sound: ""
      },
      trigger: null 
        
    });
  };
  return (
    <View style={styles.container} onPress={handleCallNotification}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Clique aqui</Text>
      </TouchableOpacity>
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

  button: {
    width: "80%",
    height: 50,
    backgroundColor:"red",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },

  text:{
    color: "#fff",
    fontSize: 28,

  }
});
