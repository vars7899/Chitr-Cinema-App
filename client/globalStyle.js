import { StyleSheet } from "react-native";
import { theme } from "./global";

const globalStyles = StyleSheet.create({
  lightText: {
    color: theme.color.text,
  },
  greyText: {
    color: theme.color.grey,
  },
  lgText: {
    fontSize: 24,
  },
  text: {
    fontSize: 20,
  },
  smText: {
    fontSize: 16,
  },
  xsText: {
    fontSize: 12,
  },
  boldText: {
    fontWeight: "bold",
  },
  semiBoldText: {
    fontWeight: "600",
  },
  darkText: {
    color: theme.color.dark,
  },
  flexCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  pdHorizontal: {
    paddingHorizontal: 20,
  },
});

export default globalStyles;
