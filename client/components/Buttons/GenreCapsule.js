import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "../../global";

const GenreCapsule = ({ item }) => {
  return (
    <View
      style={[styles.container, { backgroundColor: theme.color.darkLight }]}
    >
      <Text style={{ color: theme.color.text, fontSize: 16 }}>{item}</Text>
    </View>
  );
};

export default GenreCapsule;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    height: 36,
    borderRadius: 18,
    display: "flex",
    justifyContent: "center",
    marginRight: 10,
  },
});
