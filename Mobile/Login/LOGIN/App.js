import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  const onPress = () => {
    alert("voce esta logado")
  }

  const link = () => {
    alert("Estamos Tratando essa parte do Aplicativo")
  }
  return (
    <View style={styles.container}>

      <Image
        style={styles.image}
        source={require("./src/assets/Logo.png")}
      />

      <Text style={styles.email}>Email</Text>

      <TextInput
        style={styles.inputEmail}
        placeholder='Email'
      />

      <Text style={styles.senha}>Senha</Text>

      <TextInput
        style={styles.inputSenha}
        placeholder='Senha'
      />

    
      { <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>ENTRAR</Text>  
      </TouchableOpacity> }

      <Text style={styles.text} onPress={link}>Esqueci minha Senha</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'start',
    justifyContent: 'center',
    gap:8,
    paddingLeft: 50

  },

  image:{
      marginBottom: 80
  },

  email: {
    fontSize: 15,
    paddingLeft:20
  },

  inputEmail: {
    borderWidth: 2,
    borderRadius:8,
    borderColor:'#3A66C0',

    marginTop: 10,
    // color: 'white',
    width: 280,
    height:49,
    paddingLeft:20,
   
  },

  senha: {
    fontSize: 15,
    marginTop: 15,
    // color: 'white',
    paddingLeft:20
  },

  inputSenha: {
    borderWidth: 2,
    borderColor:'#3A66C0',
    borderRadius:8,

    marginTop: 10,
    // color: 'white',
    width: 280,
    height:49,
    paddingLeft:20,
  
    
  },

  button: {
    borderWidth: 2,
    borderRadius:8,
    borderColor:'#3A66C0',

    width: 140,
    height: 57,

    marginTop: 20,
    marginLeft:70,
    
    alignItems:'center',
    justifyContent: 'center', 
  },

  text:{
    fontSize:15,
    color: 'blue',
   paddingLeft: 65,
   paddingTop: 20,

  }
});



