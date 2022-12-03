import { StyleSheet } from "react-native";
import { theme } from "../../global";

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  seatRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  seatTypeDetails: {
    paddingVertical: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  seatTypeContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  tabText: {
    marginLeft: 10,
  },
  screenLine: {
    width: "100%",
    height: 24,
    backgroundColor: "#ffffff25",
    marginBottom: 20,
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 90,
  },
});

export default styles;
