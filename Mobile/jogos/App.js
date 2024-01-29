
import { FlatList, SafeAreaView, StatusBar, Text, StyleSheet } from 'react-native';
import Jogos from './src/Components/Jogos/Jogos';

export default function App() {
  const list = [
    { id: '1', name: 'Forza Horizon', genrer: 'Carro', description: 'Aventuras de carros', release_year: '2012' },
    { id: '2', name: 'Warzone', genrer: 'FPS, battleRoyale', description: 'jogo de tiro com muita acao e sobrevivencia ', release_year: '2020' },
    { id: '3', name: 'Rainbow Six', genrer: 'FPS', description: 'Mate os inimigos ou realize o objetivo em um 5v5', release_year: '2015' },
  ]
  return (

    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>Jogos</Text>

      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Jogos name={item.name} genrer={item.genrer} description={item.description} release_year={item.release_year} />
        )}
      />
      <StatusBar style="auto" />

    </SafeAreaView>


  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    padding: 10,
    margin: 10,
    borderRadius: 8,
  },

  title:{
    justifyContent:'center',
    alignItems:'center',
    fontSize:40,
    color: 'white',
    paddingLeft:120
    }

})