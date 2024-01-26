import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.div1}>
        <Image style={styles.image} source={require('./src/assets/lacoste.png')} />

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

    height: '50%',
    alignItems: 'center'
  },
  div2: {
    paddingTop: 30,
    height: '50%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '80%'
  },
  text: {
    fontSize: 40,
    color: 'black',
    fontWeight: 500
  },
  image: {
    height: 280,
    width: 280
  },
  btn: {
    width: '100%',
    height: 50,
    borderColor: 'black',
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 500,
    backgroundColor: '#006400'
  },
  textBtn: {
    fontWeight: 500,
    fontSize: 16
  },
  input: {
    borderWidth: 2,
    borderColor: '#006400',
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
