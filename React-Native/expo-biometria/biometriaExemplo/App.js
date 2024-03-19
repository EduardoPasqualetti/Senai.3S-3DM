
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import * as LocalAuthentication from 'expo-local-authentication'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import moment from 'moment';

export default function App() {
  const [biometriaExist, setBiometriaExist] = useState(false)
  const [authenticated, setAuthenticated] = useState(false)
  const [history, setHistory] = useState(false)

  async function CheckExistAuthenticates() {
    // validar se o aparelho tem o acesso a biometria
    const compatible = await LocalAuthentication.hasHardwareAsync()

    setBiometriaExist(compatible)
  }

  async function handleAuthentication() {
    const biometric = await LocalAuthentication.isEnrolledAsync()

    // validar se existe biometria cadastrada
    if (!biometric) {
      return Alert.alert(
      "Falha ao logar",
      "Nao foi encontrado nenhuma biometria cadastrada."
      )
    }

     // Caso exista 
     const auth = await LocalAuthentication.authenticateAsync({
      promptMessage : "Login com biometria"
     })

     setAuthenticated(auth.success)

     if (auth.success) {
      SetHistory()
     }
  }

  async function SetHistory(){
    const objAuth = {
      dateAuthenticate: moment().format("DD/MM/YYYY HH:mm:ss")
    }

    await AsyncStorage.setItem('authenticate', JSON.stringify(objAuth))

    setHistory(objAuth)
  }
  
  async function GetHistory() {
    const objAuth = await AsyncStorage.getItem('authenticate')

    if (objAuth) {
      setHistory(JSON.parse(objAuth))
    }
  }

 

  useEffect(() => {
    CheckExistAuthenticates()

    GetHistory()
  },[])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {biometriaExist ? 'Dispositivo compativel com a biometria' : "Dispositivo nao compativel com a biometria"}
      </Text>

      <TouchableOpacity style={styles.btn} onPress={() => handleAuthentication()}>
        <Text style={styles.txtBtn}>Autenticar acesso</Text>
      </TouchableOpacity>

      <Text style={{color: authenticated ? 'green' : 'red', marginTop:40, fontSize:20, textAlign:'center'}}>
        {authenticated ? 'Autenticado' : 'Nao Autenticado'}
      </Text>

      {history.dateAuthenticate ?
       <Text style={styles.txtHistory}> Ultimo acesso em {history.dateAuthenticate}</Text> : null}
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
  title: {
    fontSize: 22,
    textAlign: 'center',
    width: '70%',
    lineHeight: 20
  },
  btn: {
    marginTop: 30,
    padding: 20,
    backgroundColor: "#DAA520",
    borderRadius: 15
  },
  txtBtn: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#fff'
  },
  txtHistory: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#858383',
    position: 'absolute',
    bottom: 100
  }
});
