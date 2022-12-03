import {
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import TicketCard from "../components/Ticket/TicketCard";
import CurrentTabHeader from "../components/CurrentTabHeader/CurrentTabHeader";
import { theme } from "../global";

const TicketScreen = () => {
  const { width } = useWindowDimensions();
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
