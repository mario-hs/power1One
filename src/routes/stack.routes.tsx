import { useNavigation } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { ProductScreen } from "../screen/Product";
import { ProductCardScreen } from "../screen/ProductCard/";
import { HeaderDrawer } from "../components/HeaderDrawer";
import { HeaderStack } from "../components/HeaderStack";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  function openScreen() {
    navigation.navigate("Product");
  }

  function backScreen() {
    navigation.goBack();
  }
  return (
    <Navigator>
      <Screen
        name="ProductCardScreen"
        options={{
          header: () => <HeaderDrawer />,
        }}
        component={ProductCardScreen}
      />
      <Screen
        name="Product"
        options={{
          header: () => <HeaderStack />,
        }}
        component={ProductScreen}
      />
    </Navigator>
  );
}
