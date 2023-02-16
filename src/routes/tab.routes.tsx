import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { Cart } from "../screen/Cart";
import { Profile } from "../screen/Profile";
import { StackRoutes } from "./stack.routes";

import { useNavigation } from "@react-navigation/native";
import { HeaderDrawer } from "../components/HeaderDrawer";

const { Screen, Navigator } = createBottomTabNavigator();

export function TabRoutes() {
  const navigation = useNavigation();

  function openScreen() {
    navigation.navigate("ProductCard");
  }
  return (
    <Navigator>
      <Screen
        name="Início"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
        component={StackRoutes}
      />
      <Screen
        name="Carrinho"
        options={{
          header: () => <HeaderDrawer />,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart" color={color} size={26} />
          ),
        }}
        component={Cart}
      />
      <Screen
        name="Conta"
        options={{
          header: () => <HeaderDrawer />,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
        component={Profile}
      />
    </Navigator>
  );
}
