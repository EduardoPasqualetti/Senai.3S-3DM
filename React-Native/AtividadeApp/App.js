import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.div1}>
        <Image style={styles.image} source={require('./src/assets/login.png')} />

        <Text style={styles.text}>LOGIN</Text>

      </View>

      <View style={styles.div2}>
        <View style={styles.view}>
          <Text style={styles.label}>Email:</Text>
          <TextInput style={styles.input} placeholder='Digite seu Email:' />
        </View>

        <View style={styles.view}>
          <Text style={styles.label}>Senha:</Text>
          <TextInput style={styles.input} placeholder='Digite sua Senha:' />
        </View>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.textBtn}>ENTRAR</Text>
        </TouchableOpacity>

      </View>




      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
    alignItems: 'center',

  },
  div1: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  div2: {
    paddingTop: 30,
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '70%'
  },
  text: {
    fontSize: 40,
    color: 'black',
    fontWeight: 500
  },
  image: {
    height: 180,
    width: 180
  },
  btn: {
    width: '100%',
    height: 50,
    borderColor: 'black',
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 500,
    backgroundColor: '#00BFFF'
  },
  textBtn: {
    fontWeight: 500,
    fontSize: 16
  },
  input: {
    borderWidth: 2,
    width: '82%',
    height: 50,
    padding: 10
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    width: '100%'
  },
  label: {
    fontSize: 16,
    fontWeight: 400,
    width: '18%'
  }

});
