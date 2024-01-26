import { StatusBar } from 'expo-status-bar';
import { SafeAreaView,  Text, View } from 'react-native';
import Person from './src/components/Person/Person';

export default function App() {
  return (
    <SafeAreaView >
      <Person name='Eduardo' age='18'/>
      <Person name='Rubens' age='18'/>
      <Person name='Wanderson' age='18'/>
      <Person name='Gabriel' age='17'/>
    </SafeAreaView>
  );
}


