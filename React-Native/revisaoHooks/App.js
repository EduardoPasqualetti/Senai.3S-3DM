import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function App() {

  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }
  

  // effect

  useEffect(() => {
    console.warn(`Contador Atualizado: ${count}`)
  }, [count])



  return (
    <View style={styles.container}>

      <Text style={styles.title}>Contador: {count}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={increment} style={styles.btnAdd}>
          <Text style={styles.txtButton}>Incrementar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={decrement} style={styles.btnRem}>
          <Text style={styles.txtButton}>Decrementar</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    gap: 100,
    backgroundColor: 'black'
  },
  buttons: {
    flexDirection: 'row',
    gap: 25
  },
  btnAdd: {
    width: '45%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    backgroundColor: '#A8F64A'
  },
  btnRem: {
    width: '45%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    backgroundColor: '#F53F30'
  },
  title: {
    fontSize: 50,
    color: 'white',
  },
  txtButton: {
    fontSize: 20,

  }
});
