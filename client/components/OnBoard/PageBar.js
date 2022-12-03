import {
  StyleSheet,
  Text,
  View,
  Animated,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { theme } from "../../global";

const PageBar = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { flexDirection: "row", height: 20 }]}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 40, 10],
          extrapolate: "clamp",
        });
        const dotColor = scrollX.interpolate({
          inputRange,
          outputRange: [theme.color.grey, theme.color.white1, theme.color.grey],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            style={[styles.dot, { width: dotWidth, backgroundColor: dotColor }]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

export default PageBar;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: "2%",
    left: "50%",
    transform: [{ translateX: -50 }],
  },
  dot: {
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});
