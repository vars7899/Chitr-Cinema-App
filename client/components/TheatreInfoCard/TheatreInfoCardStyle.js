import { StyleSheet } from "react-native";
import { theme } from "../../global";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderColor: "#ffffff25",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  nameHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default styles;
