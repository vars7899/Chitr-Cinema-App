import { StyleSheet, Text, View, StatusBar } from "react-native";
import TheatreMapDistance from "./components/TheatreMapDistance/TheatreMapDistance";
import HomeScreen from "./views/HomeScreen";
import OnBoardingScreen from "./views/OnBoardingScreen";
import SeatScreen from "./views/SeatScreen/SeatScreen";
import TheatreScreen from "./views/TheatreScreen/TheatreScreen";
import TicketScreen from "./views/TicketScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <OnBoardingScreen /> */}
      {/* <HomeScreen /> */}
      {/* <TicketScreen /> */}
      {/* <SeatScreen /> */}
      {/* <TheatreScreen /> */}
      <TheatreMapDistance />
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
