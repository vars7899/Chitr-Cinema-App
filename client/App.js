import { StyleSheet, Text, View, StatusBar } from "react-native";
import TheatreMapDistance from "./components/TheatreMapDistance/TheatreMapDistance";
import LoginScreen from "./views/Authentication/LoginScreen";
import HomeScreen from "./views/HomeScreen";
import OnBoardingScreen from "./views/OnBoardingScreen";
import SeatScreen from "./views/SeatScreen/SeatScreen";
import TheatreScreen from "./views/TheatreScreen/TheatreScreen";
import TicketScreen from "./views/TicketScreen";
import { NativeBaseProvider } from "native-base";
import SplashScreen from "./views/SplashScreen/SplashScreen";
import RegisterScreen from "./views/Authentication/RegisterScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <SplashScreen />
        {/* <OnBoardingScreen /> */}
        {/* <LoginScreen /> */}
        {/* <RegisterScreen /> */}
        {/* <HomeScreen /> */}
        {/* <TicketScreen /> */}
        {/* <SeatScreen /> */}
        {/* <TheatreScreen /> */}
        {/* <TheatreMapDistance /> */}
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
    alignItems: "center",
  },
});
