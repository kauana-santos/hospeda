import { Text, View, StyleSheet, ScrollView, FlatList, Touchable, TouchableOpacity } from "react-native";
import ProdutoCard from "./components/ProdutoCard/ProdutoCard";
import { Link } from "expo-router";


export default function Index() {
  const PRODUTOS =
  [
  {
    id: "1",
    nome: "Wyndham Rio de Janeiro Barra",
    descricao: "Achegante e funcional, ideal para estadias rápidas. Conta com cama de casal confortavel, ar-condicionado e Wi-Fi de alta velocidade.",
    preco: "R$ 456",
    imagem: "https://media.staticontent.com/media/pictures/8b878215-9ef5-41f8-a68d-e7b1b1005c7f/853x380?op=TRUNCATE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1"
  },
  {
    id: "2",
    nome: "Lifestyle Laghetto Collection",
    descricao: "Espaçoso e elegante, equipado com cama king size, varanda com vista para a cidade, minibar e área de trabalho.",
    preco: "R$ 507",
    imagem: "https://media.staticontent.com/media/pictures/12e46342-7737-487c-a2fb-85cba092d34e/853x380?op=TRUNCATE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1"
  },
  {
    id: "3",
    nome: "Hotel Atlântico Praia",
    descricao: "Experiência de luxo completa com hidromassagem, sala de estar integrada, cama super king e amenidades exclusivas.",
    preco: "R$ 481",
    imagem: "https://media.staticontent.com/media/pictures/21ea4569-3d9c-4e8b-80a1-2e10a7f26041/579x434?op=TRUNCATE&enlarge=false&gravity=nowe_0_0&quality=80&dpr=1"
  },
  {
    id: "4",
    nome: "Prodigy Santos Dumont by Wish",
    descricao: "Perfeito para grupos ou famílias, oferecendo uma cama de casal e duas de solteiro com ambiente amplo e bem iluminado.",
    preco: "R$ 600",
    imagem: "https://media.staticontent.com/media/pictures/39c3b81e-be27-45a5-89d6-d8aeb1c3a6ae/579x434?op=TRUNCATE&enlarge=false&gravity=nowe_0_0&quality=80&dpr=1"
  }
]

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Hospeda.com</Text>
      </View>

      <TouchableOpacity>
        <Link href={"/Hospedagem"} asChild>
          <FlatList
          data={PRODUTOS}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (<ProdutoCard nome={item.nome} preco={item.preco} descricao={item.descricao} imagem={item.imagem}/>)}
          />
        </Link>
      </TouchableOpacity>
    </ScrollView>
      
  );
}



const styles = StyleSheet.create({
  container:{
    backgroundColor: "#fff",
    width: "100%",
    flex: 1,

  },
  header: {
    height:60,
    justifyContent:"center",
    backgroundColor:"#280670",
    marginBottom: 10,
    
  },
  headerText:{
    fontSize: 18,
    fontWeight:"bold",
    marginLeft: 15,
    color: "#fff"
  }
  
});

