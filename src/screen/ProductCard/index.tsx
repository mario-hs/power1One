import { useEffect, useState } from "react";
import { FlatList, Text, View, SafeAreaView } from "react-native";

import { ProductCard } from "../../components/ProductCard";
import { useFetch } from "../../Hooks/useFetch";
import { styles } from "./styles";

export interface IProductCard {
  id: string;
  name: string;
  price: string;
  image: any[];
}

export function ProductCardScreen() {
  const [product, setProduct] = useState<IProductCard[]>([]);
  const { data, isPeding, error } = useFetch(
    "http://752136.commercesuite.com.br/web_api/products"
  );

  useEffect(() => {
    let formattedData: any = [];
    data.map(({ Product }: any) => {
      if (Product.id != "201") {
        formattedData.push({
          id: Product.id,
          name: Product.name,
          price: Product.price.replace(".", ","),
          image: Product.ProductImage,
        });
      }
      setProduct([...formattedData]);
    });
  }, [data]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        {error && <Text>{error}</Text>}
        {isPeding && <Text>Carregando...</Text>}
        {data && (
          <FlatList
            data={product}
            keyExtractor={(item) => item.id}
            numColumns={2}
            renderItem={({ item }) => <ProductCard product={item} />}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
