import { StyleSheet, Text, View } from "react-native"

// Component Person

//props : name, age
const Person = ({name, age}) =>{
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
        borderRadius:5,
        flexDirection: 'row',
       justifyContent: 'space-between'
    },
    name: {
        color: 'red',
        marginLeft:40
    },
    age: {
        marginRight:60
    }
})

export default Person;