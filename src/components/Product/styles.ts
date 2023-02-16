import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 30,
    backgroundColor: "#fff",
  },

  productName: {
    fontSize: 18,
    textAlign: "center",
    lineHeight: 30,
  },

  productImg: {
    flex: 1,
    width: "60%",
    height: 250,
    marginVertical: 30,
  },

  productPrice: {
    alignSelf: "flex-start",
    fontSize: 28,
    marginBottom: 10,
  },

  productDescription: {
    fontSize: 18,
    flex: 1,
    textAlign: "center",
  },

  line: {
    width: 110,
    height: 1.5,
    backgroundColor: theme.colors.line,
    borderRadius: 10,
  },

  wrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },

  productTextDescription: {
    fontSize: 14,
    lineHeight: 20,
  },
});
