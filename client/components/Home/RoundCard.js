import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { theme } from "../../global";

const RoundCard = ({ movie }) => {
  const width = useWindowDimensions();
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.75}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/original/${movie?.poster_path}`,
        }}
        style={[styles.img]}
      />
      <View style={{ width: 100 }}>
        <Text style={styles.movieName}>{movie?.original_title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RoundCard;

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    display: "flex",
    alignItems: "center",
  },
  movieName: {
    color: theme.color.text,
    textAlign: "center",
  },
  img: {
    resizeMode: "cover",
    height: 100,
    borderRadius: 50,
    aspectRatio: 1 / 1,
  },
});
