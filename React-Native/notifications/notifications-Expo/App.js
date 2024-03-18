import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Importar a biblioteca
import * as Notifications from "expo-notifications"

// Solicitar as permissoes de notificacao ao iniciar o app
Notifications.requestPermissionsAsync()

// Como as notificacoes devem ser tratadas quando recebidas
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    // Mostra o alerta quando a notificacao for recebida
    shouldShowAlert: true,
    // Reproduz ou nao o som ao receber a notificacao
    shouldPlaySound: true,
    

    // Configura o numero de notificacoes no icone do app
    shouldSetBadge: false
  })
})

export default function App() {
  

  // Funcao para lidar com a chamada da notificacao
  const handleCallNotifications = async () => {

    // Pega o status da permissao
    const { status } = await Notifications.getPermissionsAsync()

    // Verifica se o usuario concedeu a permissao para o uso de notificacoes
    if (status !== "granted") {
      alert("Voce nao permitiu as notificacoes estarem ativas")
      return
    }

    

    // obter o token de envio de notificacao
    // const token = await Notifications.getExpoPushTokenAsync()

    // Agendar uma notificacao para ser exibida apos 5 segundos
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Helloo World",
        body: "Criando uma POC para implementar expo notifications",
        sound: true
      },
      trigger: {
        seconds: 2
      }
    })
  }



  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={handleCallNotifications}>
        <Text style={styles.txt}>Notificacao</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: '70%',
    height: 80,
    backgroundColor: 'blue',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txt: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  }
});
