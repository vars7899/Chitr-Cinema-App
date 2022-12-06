import styles from "./TheatreScreenStyle";
import { View, FlatList } from "react-native";
import theatre from "../../data/dummyTheatreList";
import TheatreInfoCard from "../../components/TheatreInfoCard/TheatreInfoCard";
import CurrentTabHeader from "../../components/CurrentTabHeader/CurrentTabHeader";

const TheatreScreen = () => {
  return (
    <View style={styles.container}>
      <CurrentTabHeader currentTab="Select Theatre" />
      <View style={styles.main}>
        <FlatList
          data={theatre}
          renderItem={({ item }) => <TheatreInfoCard theatre={item} />}
        />
      </View>
    </View>
  );
};

export default TheatreScreen;
