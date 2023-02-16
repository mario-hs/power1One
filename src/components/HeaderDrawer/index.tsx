import { Image, View } from "react-native";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export function HeaderDrawer() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View
      style={{
        height: 90,
        width: "100%",
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: theme.colors.primary,
        paddingTop: 25,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(DrawerActions.openDrawer());
        }}
        style={{
          width: 26,
          height: 26,
        }}
      >
        <MaterialCommunityIcons name="menu" color={"#231F20"} size={26} />
      </TouchableOpacity>

      <Image
        style={{ width: 200, height: 50 }}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/mobilizei.appspot.com/o/images%2Ftray%2Fstores%2F752136%2FC1DetjCKm.png?alt=media",
        }}
        resizeMode="contain"
      />
      <TouchableOpacity
        // onPress={() => navigation.openDrawer()}
        style={{
          width: 26,
          height: 26,
        }}
      >
        <MaterialCommunityIcons name="magnify" color={"#231F20"} size={26} />
      </TouchableOpacity>
    </View>
  );
}
