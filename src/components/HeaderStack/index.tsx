import { Image, View } from "react-native";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export function HeaderStack() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  function backScreen() {
    navigation.goBack();
  }
  return (
    <View
      style={{
        height: 90,
        width: "100%",
        flexDirection: "row",
        // justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: theme.colors.primary,
        paddingTop: 25,
      }}
    >
      <TouchableOpacity
        onPressIn={() => backScreen()}
        style={{
          width: 26,
          height: 26,
          marginLeft: 20,
        }}
      >
        <MaterialCommunityIcons
          name="chevron-left"
          color={"#231F20"}
          size={26}
        />
      </TouchableOpacity>
      <View style={{ width: "90%", justifyContent: "center" }}>
        <Image
          style={{ width: 280, height: 50 }}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/mobilizei.appspot.com/o/images%2Ftray%2Fstores%2F752136%2FC1DetjCKm.png?alt=media",
          }}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}
