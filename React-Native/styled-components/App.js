import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container } from './src/components/Container/Container';


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
    <Container>

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
    </Container>
  );
}

const styles = StyleSheet.create({
 
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
