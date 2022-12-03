import { StyleSheet } from "react-native";
import { theme } from "../../global";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.color.white1,
    borderRadius: 10,
    marginBottom: 100,
  },
  upperContainer: {
    padding: 20,
  },
  upperContainerName: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
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
  upperContainerDesc: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  imageContainer: {
    position: "relative",
  },
  theatreAddress: {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00000099",
  },
  dateAndTime: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 20,
  },
  flexCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  seat: {
    padding: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  tear: {
    marginVertical: 20,
    borderTopWidth: 5.5,
    borderStyle: "dotted",
    position: "relative",
  },
  bigDot: {
    height: 30,
    width: 30,
    borderRadius: 25,
    backgroundColor: theme.color.dark,
    position: "absolute",
    top: -18,
  },
  dotLeft: {
    left: -18,
  },
  dotRight: {
    right: -18,
  },
  qrContainer: {
    padding: 20,
  },
});

export default styles;
