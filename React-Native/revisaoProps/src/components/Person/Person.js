import { StyleSheet, Text, View } from "react-native"
import {useFonts, Montserrat_500Medium_Italic } from '@expo-google-fonts/montserrat'
import { Oswald_400Regular } from "@expo-google-fonts/oswald";
import { SingleDay_400Regular} from "@expo-google-fonts/single-day"
// Component Person

//props : name, age
const Person = ({ name, age }) => {

    let [fontsLoaded, fontError] = useFonts({
        Montserrat_500Medium_Italic,
        Oswald_400Regular,
        SingleDay_400Regular
      });

      if (!fontsLoaded && !fontError) {
        return null;
      }

    return (
        <View style={styles.container}>
            <Text style={styles.name}>Nome: {name}</Text>   
            <Text style={styles.age}>Idade: {age}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e0e0e0',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 90,
        alignItems: 'center'
    },
    name: {
        color: 'red',
        marginLeft: 40,
        fontSize: 22,
        fontFamily: 'SingleDay_400Regular'
    },
    age: {
        marginRight: 60,
        fontSize: 16,
        fontFamily: 'Montserrat_500Medium_Italic'
    }
})

export default Person;