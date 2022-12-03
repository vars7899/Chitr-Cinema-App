import { useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import TicketCard from "../components/Ticket/TicketCard";
import CurrentTabHeader from "../components/CurrentTabHeader/CurrentTabHeader";
import { theme } from "../global";
import * as Brightness from "expo-brightness";

const TicketScreen = () => {
  const { width } = useWindowDimensions();
  // increase device brightness when ticket component mounts
  useEffect(() => {
    (async () => {
      const { status } = await Brightness.requestPermissionsAsync();
      console.log(initialBrightness);
      if (initialBrightness && status === "granted") {
        Brightness.setBrightnessAsync(1.75);
      }
    })();
    return () => Brightness.setBrightnessAsync(0.1);
  }, []);
  return (
    <View style={[styles.container, { width }]}>
      <CurrentTabHeader currentTab="Thor: Love and Thunder" />
      <ScrollView style={styles.cardControl}>
        <TicketCard />
      </ScrollView>
    </View>
  );
};

export default TicketScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.color.dark,
    height: "100%",
  },
  cardControl: {
    padding: 20,
  },
});
