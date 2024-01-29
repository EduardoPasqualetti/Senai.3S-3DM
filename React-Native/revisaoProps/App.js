import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView,  Text, View, StyleSheet } from 'react-native';
import Person from './src/components/Person/Person';

export default function App() {

  const peopleList = [
    {id: 1, name: 'Eduardo', age: 18},
    {id: 2, name: 'Gabriel', age: 17},
    {id: 3, name: 'Rubens', age: 19},
    {id: 4, name: 'Wanderson', age: 18},

  ]


  return (
    <SafeAreaView >
      <FlatList
      data={peopleList}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <Person name={item.name} age={item.age}/>
      )}
      />

    </SafeAreaView>
  );
}



