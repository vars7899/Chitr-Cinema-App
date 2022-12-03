import { FlatList, StyleSheet, Text, View } from "react-native";
import { theme } from "../../global";
import Trending from "./Trending";

const MovieListRow = ({ list, title }) => {
  return (
    <View style={{ marginLeft: 16, marginTop: 16 }}>
      <Text style={styles.trending}>{title}</Text>
      {list && (
        <FlatList
          data={list}
          renderItem={({ item }) => <Trending movie={item} />}
          horizontal
        />
      )}
    </View>
  );
};

export default MovieListRow;

const styles = StyleSheet.create({
  trending: {
    fontSize: 20,
    color: theme.color.text,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
