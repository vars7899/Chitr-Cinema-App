import { StyleSheet, Text, View, StatusBar } from "react-native";
import HomeScreen from "./views/HomeScreen";
import OnBoardingScreen from "./views/OnBoardingScreen";
import SeatScreen from "./views/SeatScreen/SeatScreen";
import TicketScreen from "./views/TicketScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <OnBoardingScreen /> */}
      {/* <HomeScreen /> */}
      {/* <TicketScreen /> */}
      <SeatScreen />
    </View>
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
