import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container, ViewBtn } from './src/components/Container/Container';
import { BtnAdd, BtnRem, Btn } from './src/components/Button/Button';
import { Title, TextBtn } from './src/components/Title/Title';
import { Img, BtnImage, BtnImageG } from './src/components/Image/Image';



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
    
  }, [count])



  return (
    <Container> 

      <Img source={require('./src/assets/contador.jpg')} onPress={increment}/>

      <Title>Contador: {count}</Title>

      <ViewBtn>
        <Btn onPress={increment}>
          <BtnImageG source={require('./src/assets/mais.webp')}></BtnImageG>
        </Btn>
        <Btn onPress={decrement}>
        <BtnImage source={require('./src/assets/menos.webp')}></BtnImage>
        </Btn>
      </ViewBtn>
    </Container>
  );
}

