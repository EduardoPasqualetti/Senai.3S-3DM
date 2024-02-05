import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    // Navegacao
      //Container
      //StackNavigation
      //StackSecreen


    // Envolve a estrutura da navegacao
    <NavigationContainer>

      {/* componente para navegacao */}
      <Stack.Navigator>

        <Stack.Screen
        // nome da tela
          name='Navegacao'

          component={Navegacao}
          
          options={{title: 'Navegacao'}}
        />

      </Stack.Navigator>

    </NavigationContainer>

  );
}

