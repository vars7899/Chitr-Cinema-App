import {
  View,
  Text,
  ImageBackground,
  useWindowDimensions,
  Image,
} from "react-native";
import React from "react";

const SplashScreen = () => {
  const { height, width } = useWindowDimensions();
  return (
    <View>
      <ImageBackground
        source={require("../../assets/p.webp")}
        style={[{ height, width }]}
        resizeMode="cover"
      >
        <View
          style={{
            height: "100%",
            backgroundColor: "red",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#000000C6",
          }}
        >
          <Image
            source={require("../../assets/lg.png")}
            style={{
              height: 260,
              aspectRatio: 1 / 1,
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;
