import { Image, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { POKEMON_TYPE_COLORS } from "../../utils/colors";
import { styles } from "./styles";
import Button from "../Button";
import { useRouter } from "expo-router";

export default function Card({ pokemon }) {
    const router = useRouter();
    return (
        <TouchableOpacity
            onPress={() =>
                router.push({ pathname: "/pokemon",
                    parms: {...pokemon, Tipo: JSON.stringify(pokemon.Tipo) },
                })
            }   
            style={[styles.container,
                { backgroundColor: `${POKEMON_TYPE_COLORS[pokemon.Tipo[0].Nome]}` },
            ]}>
            <View style={styles.info}>
                <Text style={styles.numero}>#{pokemon.Numero}</Text>
                <Text style={styles.nome}>#{pokemon.Nome}</Text>
                <ScrollView horizontal>
                    {pokemon.Tipo.map((tipo) => (
                        <Text>{tipo.Nome}</Text>
                    ))}
                </ScrollView>
            </View>
            <View style={styles.imageContainer}>
                <Image source={{ uri: pokemon.Imagem }} style={styles.imagem}/>
            </View>
        </TouchableOpacity>
    );
}