import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Container } from './src/components/Container/Container';
import { TitleDecrement, TitleIncrement,  } from './src/components/Title/TitleIncrement';
import { BtnDecrement, BtnIncrement,  } from './src/components/Button/BtnDecrement';
import { Title } from './src/components/Title/TitleCount';





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
    <Container>

      <BtnIncrement onPress={increment}>
        <TitleIncrement>Incrementar +</TitleIncrement>
      </BtnIncrement>

      <Title>Contador: {count}</Title>


      <BtnDecrement onPress={decrement}>
        <TitleDecrement>Decrementar -</TitleDecrement>
      </ BtnDecrement>


      <StatusBar style="auto" />
    </Container>
  );
}

// const styles = StyleSheet.create({
//   // container: {
//   //   flex: 1,
//   //   flexDirection: 'row',
//   //   backgroundColor: '#fff',
//   //   alignItems: 'center',
//   //   justifyContent: 'center',
//   //   gap: 20
//   // },

//   // decremento: {
//   //   borderWidth: 3,
//   //   padding: 5,
//   //   backgroundColor: '#8B008B',
//   //   borderRadius: 6,



//   //   alignItems:'center',
//   //   justifyContent:'center'
//   // },
//   // incremento: {
//   //   borderWidth: 3,
//   //   padding: 5,
//   //   backgroundColor: '#BA55D3',
//   //   borderRadius: 6,


//   //   alignItems:'center',
//   //   justifyContent:'center'
//   // }
// });
