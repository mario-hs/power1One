import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { Product } from "../../components/Product";
import { useFetchId } from "../../Hooks/useFetch.id";

import { styles } from "./styles";

type ParamList = {
  idProduct: {
    id: string;
  };
};

export function ProductScreen() {
  const route = useRoute<RouteProp<ParamList, "idProduct">>();
  const { id } = route.params;

  const { data, isPeding, error } = useFetchId(
    `http://752136.commercesuite.com.br/web_api/products/${id}`
  );

  return (
    <View style={styles.container}>
      {error && <Text>{error}</Text>}
      {isPeding || (data == undefined && <Text>Carregando...</Text>)}
      {data && <Product data={data[0]} />}
    </View>
  );
}
