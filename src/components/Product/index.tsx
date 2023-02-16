import { Image, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";

export function Product({ data }: any) {
  return (
    <ScrollView>
      {data == undefined ? (
        <Text>Carregando...</Text>
      ) : (
        <View style={styles.container}>
          <Text style={styles.productName}>{data.name}</Text>
          <Image
            source={{ uri: data.image[0].http }}
            style={styles.productImg}
          />

          <Text style={styles.productPrice}>R$ {data.price}</Text>

          <View style={styles.wrapper}>
            <View style={styles.line}></View>
            <Text style={styles.productDescription}>Descrição</Text>
            <View style={styles.line}></View>
          </View>

          <Text style={styles.productTextDescription}>{data.description}</Text>
        </View>
      )}
    </ScrollView>
  );
}
