import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import globalStyles from "../../globalStyle";

const Button1 = ({ givenText, onClick, bg, color, desc }) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={[styles.container, { backgroundColor: bg, marginBottom: 10 }]}
    >
      <Text style={[styles.btnText, { color }]}>{givenText}</Text>
      {desc && <Text style={[globalStyles.xsText, { color }]}>{desc}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  btnText: {
    width: "100%",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Button1;
