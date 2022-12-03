import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const IconButton = ({ icon, bg }) => {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: bg }]}>
      {icon}
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});
