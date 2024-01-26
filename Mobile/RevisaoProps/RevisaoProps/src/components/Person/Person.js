import { View, Text, StyleSheet } from "react-native"



const Person = ({ name, age }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>Nome: {name}</Text>
            <Text style={styles.age}>Idade: {age}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'gray',
        padding:10,
        margin:10,
        borderRadius: 8,
    },

    name:{
        color: 'white',
        fontSize:20
    },

    age:{
        color:'blue',
        fontSize: 20
    }


})

export default Person;