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

//funcao para lidar com uma chamada de notificacao
export const handleCallNotification = async ({ title, body }) => {
  //obtem o status da permissao
  const { status } = await Notifications.getPermissionsAsync();

  if (status !== "granted") {
    alert("Voce nao deixou as notificacoes ativas");
    return;
  }

  //Agenda uma notificacao
  await Notifications.scheduleNotificationAsync({
    content: {
      title: title,
      body: body,
    },
    trigger: null,
  });
};
