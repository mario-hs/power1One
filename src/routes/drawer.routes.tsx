import { createDrawerNavigator } from "@react-navigation/drawer";

import { TabRoutes } from "./tab.routes";
import { useNavigation } from "@react-navigation/native";
import { Settings } from "../screen/Settings";
import { HeaderDrawer } from "../components/HeaderDrawer";

const { Screen, Navigator } = createDrawerNavigator();

export function DrawerRoutes() {
  const navigation = useNavigation();
  return (
    <Navigator>
      <Screen
        name="Inicio"
        options={{ headerShown: false }}
        component={TabRoutes}
      />
      <Screen
        name="Configurações"
        options={{ header: () => <HeaderDrawer /> }}
        component={Settings}
      />
    </Navigator>
  );
}
