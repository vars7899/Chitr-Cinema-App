import { StyleSheet } from "react-native";
import { theme } from "../../global";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    display: "flex",
  },
  logoImageContainer: {
    height: "100%",
    backgroundColor: "red",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000C6",
  },
  logoImage: {
    height: 200,
    aspectRatio: 1 / 1,
  },
  formContainer: {
    paddingTop: 20,
    paddingHorizontal: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    flex: 1.5,
    bottom: 10,
    backgroundColor: "#000",
  },
  forgotPassword: {
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
    paddingTop: 6,
  },
  signUpText: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
