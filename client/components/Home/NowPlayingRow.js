import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "../../global";
import Trending from "./Trending";
import RoundCard from "./RoundCard";

const NowPlayingRow = ({ list, title }) => {
  return (
    <View style={{ marginLeft: 16, marginTop: 16 }}>
      <Text style={styles.title}>{title}</Text>
      {list && (
        <FlatList
          data={list}
          renderItem={({ item }) => <RoundCard movie={item} />}
          horizontal
        />
      )}
    </View>
  );
};

export default NowPlayingRow;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: theme.color.text,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
