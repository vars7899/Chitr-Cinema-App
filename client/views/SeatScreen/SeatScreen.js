import { ScrollView, Text, View } from "react-native";
import Button1 from "../../components/Buttons/Button1";
import CurrentTabHeader from "../../components/CurrentTabHeader/CurrentTabHeader";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import SeatSelection from "../../components/SeatSelection/SeatSelection";
import { theme } from "../../global";
import globalStyles from "../../globalStyle";
import styles from "./SeatScreenStyle";

const SeatScreen = () => {
  return (
    <View style={{ backgroundColor: theme.color.dark }}>
      <CurrentTabHeader currentTab="Seat Selection" />
      <ScrollView>
        <MovieDetails />
        <SeatSelection />
        <View style={globalStyles.pdHorizontal}>
          <Button1
            givenText="Proceed To Checkout"
            bg={theme.color.blue}
            color={theme.color.white1}
            desc="Adult x 2 | total price: 55 CAD"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default SeatScreen;
