import Hospedagem from "@/app/Hospedagem";
import { Image, StyleSheet, Text, View } from "react-native";

interface Props{
        nome: string;
        preco: string;
        imagem: string;
        descricao: string;
    }

export default function ProdutoCard({ nome, preco, imagem, descricao }: Props) {

  return (
    <View style={styles.produtoContainer}>
        <View>
            <Image style={styles.imagemProduto} source={{ uri: imagem}}/>
        </View>
        <View>
            <Text style={styles.hospedagemNome}>{nome}</Text>
            <Text>{descricao}</Text>
            <Text style={styles.hospedagemPreco}>{preco}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  imagemProduto: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  produtoContainer: {
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 20
  },
  hospedagemNome:{
    fontSize: 19,
    fontWeight: "bold",
    marginVertical: 3
  },
  hospedagemPreco:{
    fontSize: 16,
    fontWeight: "bold"
  }
  
});