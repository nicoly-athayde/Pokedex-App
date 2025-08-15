import { useLocalSearchParams } from 'expo-router';
import { Dimensions, Image, StyleSheet, ScrollView, View } from 'react-native';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Text from '../../components/TextInfo';

const width = Dimensions.get("window").width;

export default function PokemonDetail() {
  const { pokemon } = useLocalSearchParams();

  const tipo = 
    typeof pokemon.Tipo === "string" ? JSON.parse(pokemon.Tipo) : pokemon.Tipo;

  return (
    <View style={styles.container}>
      <Header
        title={`#${pokemon.Numero} - ${pokemon.Nome}`}
        back={true}
      />
      <View style={[styles.card, { backgroundColor: tipo[0].Cor }]}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: pokemon.Imagem }}
            style={styles.image}
          />
        </View>
      </View>

      <ScrollView
        horizontal
        contentContainerStyle={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {tipo.map((tipo) => (
          <Tipo
            tipo={tipo}
            key={tipo.Nome}
            large={true}
          />
        ))}
      </ScrollView>

      <View style={styles.dataContainer}>
        <TextInfo label="Descrição" text={pokemon.Descricao} />
        <TextInfo label="Espécie" text={pokemon.Especie} />
        <TextInfo label="Altura" text={pokemon.Altura + " m"} />
        <TextInfo label="Peso" text={pokemon.Peso + " kg"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    flexDirection: 'column',
  },
  card: {
    width: width - 30,
    height: 160,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#181818',
    marginHorizontal: 15,
    marginBottom: 30,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginTop: -60,
    width: 200,
    height: 200,
    paddingVertical: 20,
  },
});
