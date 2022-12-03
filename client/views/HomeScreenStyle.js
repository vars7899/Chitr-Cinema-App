import { StyleSheet } from "react-native";
import { theme } from "../global";

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  brand: {
    fontSize: 30,
    textTransform: "capitalize",
    fontWeight: "bold",
  },
  left: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  right: {
    display: "flex",
    flexDirection: "row",
  },
  genreList: {
    paddingVertical: 16,
    paddingLeft: 16,
  },
  trending: {
    fontSize: 20,
    color: theme.color.text,
    fontWeight: "bold",
    marginBottom: 16,
  },
});

export default styles;
