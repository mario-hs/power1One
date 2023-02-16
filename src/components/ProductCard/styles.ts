import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  cardWrapper: {
    backgroundColor: "#fff",
    width: 175,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 3,
    marginHorizontal: 5,
    marginVertical: -5,
  },

  productImg: {
    width: "100%",
    height: 200,
  },

  productName: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    textAlign: "center",
  },

  productPrice: {
    paddingVertical: 10,
    fontSize: 16,
  },
});
