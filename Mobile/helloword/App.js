import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';



export default function App() {
  const onPress = () => {
    alert("Parabens, voce clicou no botao")
  }
  return (
    <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri:"data:image/jpeg;base64,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"
          }}
        />
      <Text style={styles.title}>Hello Word</Text>
      <TextInput
        style={styles.input}
        defaultValue='Exemplo do input'
      />

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={{ color: 'white' }}>Click aqui</Text>
      </TouchableOpacity>



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10


  },

  image: {
    width: 390,
    height: 200
  },



  title: {
    color: 'white',
    backgroundColor: 'purple',
    fontSize: 50,
    borderColor: 'black',
    borderWidth: 5,
    padding: 30,
    borderRadius: 10,
  },

  input: {
    width: '90%',
    height: 40,
    borderWidth: 4,
    marginTop: 20,

    fontSize: 22,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 80,

    borderRadius: 8
  },

  button: {
    width: '30%',
    height: 50,
    backgroundColor: 'purple',
    paddingLeft: 28,
    paddingTop: 13,
    marginTop: 15,

    borderWidth: 3,
    borderRadius: 8


  }



});
