import { useNavigation } from "@react-navigation/native";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

export function ProductCard({ product }: any) {
  const navigation = useNavigation();

  function openScreen(id: string) {
    navigation.navigate("Product", { id });
  }

  return (
    <SafeAreaView>
      {product == undefined ? (
        <Text>Carregando...</Text>
      ) : (
        <TouchableOpacity
          style={styles.cardWrapper}
          key={product.id}
          onPress={() => openScreen(product.id)}
        >
          <Image
            source={{ uri: product.image[0].http }}
            style={styles.productImg}
          />

          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productPrice}>R$ {product.price}</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}
