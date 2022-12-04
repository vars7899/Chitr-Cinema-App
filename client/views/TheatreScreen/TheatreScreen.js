import { View, Text, FlatList } from "react-native";
import CurrentTabHeader from "../../components/CurrentTabHeader/CurrentTabHeader";
import styles from "./TheatreScreenStyle";
import theatre from "../../data/dummyTheatreList";
import TheatreInfoCard from "../../components/TheatreInfoCard/TheatreInfoCard";

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
