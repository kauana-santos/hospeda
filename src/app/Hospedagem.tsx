import { Link } from "expo-router";
import { Text, Image, View, StyleSheet, ScrollView, FlatList, Touchable, TouchableOpacity } from "react-native";


export default function Hospedagem() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Link href={"/"} asChild>
                    <Text style={styles.btnVoltar}>Voltar</Text>
                </Link>
            </View>
            <View>
                <Image style={styles.imagemProduto} source={{ uri: "https://media.staticontent.com/media/pictures/8b878215-9ef5-41f8-a68d-e7b1b1005c7f/853x380?op=TRUNCATE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1" }} />
            </View>

            <View style={styles.containerDesc}>
                <Text style={styles.hospedagemNome}>Wyndham Rio de Janeiro Barra</Text>
                <Text style={styles.descricao}>Localizado em frente à Praia da Barra da Tijuca (Posto 4), no Rio de Janeiro, o Wyndham Rio de Janeiro Barra oferece 5 piscinas e área de lazer com bar, além de serviço de praia com atividades esportivas e recreativas. A estrutura conta com serviços pagos de spa (Rio Season Fisio Spa) e salão de beleza (Werner), sendo recomendável o uso de táxis para deslocamentos noturnos pela região.</Text>
                <Text style={styles.preco}>R$ 456,00</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        justifyContent: "center",
        backgroundColor: "#280670",
        marginBottom: 10
    },
    container: {
        backgroundColor: "#fff",
        width: "100%",
        flex: 1,
    },
    imagemProduto: {
        width: "100%",
        height: 250,
    },
    btnVoltar: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff"
    },
    containerDesc: {
        marginHorizontal: 15,
        marginVertical: 18,
        backgroundColor: "#eeeeee",
        borderRadius: 9,
        borderWidth: 1,
        borderColor: "#dddddd",
        padding: 10,

    },
    hospedagemNome: {
        fontSize: 19,
        fontWeight: "bold",
        marginVertical: 3,
        color: "#383838"
    },
    descricao: {
        fontSize: 15,
        marginBottom: 10

    },
    preco: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#383838"
    }



});
