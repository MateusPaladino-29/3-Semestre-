import { View, Text, StyleSheet } from "react-native"

const jogos = ({name,genrer,description,release_year, }) => {
    return(
        <View style={styles.container}>
            <Text style={styles.name}>name: {name}</Text>
            <Text style={styles.genrer}>genrer: {genrer}</Text>
            <Text style={styles.description}>description: {description}</Text>    
            <Text style={styles.release_year}>release_year: {release_year}</Text>
        
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
        padding:10,
        margin:10,
        borderRadius: 8,
    },

    name:{
        color:'white',
        fontSize: 15
    },

    genrer:{
        color:'white',
        fontSize: 15
    },
    description:{
        color:'white',
        fontSize: 15
    },
    
    release_year:{
        color:'white',
        fontSize: 15
    },


})

export default jogos
