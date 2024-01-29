import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function App() {
  const [count, setCount] = useState(0)

  //funcao para incrementar
  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  useEffect(() => {
    console.warn(`Contador Atualizado: ${count}`)
  }, [count])


  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.incremento} onPress={increment}>
        <Text style={{color:'white'}}>Incrementar +</Text>
      </TouchableOpacity>

      <Text style={{fontSize: 15}}>Contador: {count}</Text>


      <TouchableOpacity style={styles.decremento} onPress={decrement}>
        <Text style={{color:'white'}}>Decrementar -</Text>
      </TouchableOpacity>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
  },

  decremento: {
    borderWidth: 3,
    padding: 5,
    backgroundColor: '#8B008B',
    borderRadius: 6,



    alignItems:'center',
    justifyContent:'center'
  },
  incremento: {
    borderWidth: 3,
    padding: 5,
    backgroundColor: '#BA55D3',
    borderRadius: 6,


    alignItems:'center',
    justifyContent:'center'
  }
});
