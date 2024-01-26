import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { Button, TouchableOpacity } from 'react-native-web';

export default function App() {
  return (
    <View style={estilos.container}>

      {/* <Image style={estilos.imagem} source={require('./src/assets/react.png')}/> */}

      <Text style={estilos.text}>HELLO, WORLD!</Text>

      <TextInput style={estilos.input} defaultValue='INPUT'/>

      <TouchableOpacity style={estilos.btn}>
        <Text>BOTAO</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center', 
    color: 'red',
    gap: 20
  },
  text: {
    fontSize: 50,
    color: 'black',
    fontWeight: 500
  },
  input:{
    width: '80%',
    height:50,
    borderWidth: 2,
    backgroundColor: "grey",
    padding:10,
    marginTop: 10
  },
 
  btn: {
    width: '60%',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  }
});
