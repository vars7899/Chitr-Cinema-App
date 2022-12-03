import { StyleSheet } from "react-native";
import { theme } from "../../global";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.color.dark,
    paddingVertical: 20,
    paddingHorizontal: 16,
    display: "flex",
    flexDirection: "row",
  },
  tabText: {
    marginLeft: 20,
  },
});

export default styles;
