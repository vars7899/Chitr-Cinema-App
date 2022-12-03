import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";
import { theme } from "../../global";
import Button1 from "../Buttons/Button1";
import { LinearGradient } from "expo-linear-gradient";

const OnBoardCar = ({ item, scrollTo }) => {
  const { width, height } = useWindowDimensions();

  return (
    <View style={[styles.container, { width, height }]}>
      <Image
        source={item?.image}
        style={[styles.image, { width, height, resizeMode: "cover" }]}
      />
      <LinearGradient
        // Background Linear Gradient
        colors={["transparent", "rgba(0,0,0,0.8)"]}
        style={[styles.overlay, { height, width }]}
      />
      <View style={styles.upper}>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.desc}>{item?.desc}</Text>
        <Button1
          givenText={item?.btnText}
          bg={theme.color.accent1}
          color={theme.color.white1}
          onClick={scrollTo}
        />
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    position: "relative",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  upper: {
    position: "absolute",
    zIndex: 5,
    padding: 16,
    bottom: 10,
  },
  title: {
    color: theme.color.text,
    fontWeight: "bold",
    fontSize: 24,
    textTransform: "uppercase",
    marginBottom: 10,
    textAlign: "left",
  },
  desc: {
    color: theme.color.grey,
    fontWeight: "300",
    fontSize: 16,
    marginBottom: 20,
    textAlign: "left",
  },
  overlay: {
    position: "absolute",
    zIndex: 2,
    top: 0,
    left: 0,
  },
});

export default OnBoardCar;
