import { StyleSheet } from "react-native";
import { theme } from "../../global";

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 10,
    paddingVertical: 20,
    borderColor: "#ffffff25",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  nameHeader: {
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dateSelectorContainer: {
    marginTop: 20,
  },
  dateCard: {
    padding: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: theme.color.grey,
    borderWidth: 1,
    width: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  timeCard: {
    padding: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: theme.color.grey,
    borderWidth: 1,
    width: 120,
    borderRadius: 10,
    marginRight: 10,
  },
});

export default styles;
