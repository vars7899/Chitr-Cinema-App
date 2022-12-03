import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { theme } from "../../global";
import { Feather } from "@expo/vector-icons";

const Trending = ({ movie }) => {
  const { width } = useWindowDimensions();
  return (
    <TouchableOpacity
      style={[{ width: width / 2 }, styles.container]}
      activeOpacity={0.75}
    >
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/original/${movie?.poster_path}`,
        }}
        style={[styles.trendingImg, { width: width / 2 }]}
      />
      <Text style={styles.movieName}>
        {movie?.original_title.slice(0, 23)}
        {movie?.original_title.length > 23 && "..."}
      </Text>
      <View style={styles.details}>
        <Text style={styles.text}>{movie?.release_date}</Text>
        <View style={styles.rating}>
          <Feather name="thumbs-up" size={12} color={theme.color.grey} />
          <Text style={[styles.text, { marginLeft: 5 }]}>
            {movie?.vote_average.toFixed(1)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Trending;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    marginRight: 20,
    height: "100%",
  },
  trendingImg: {
    resizeMode: "cover",
    height: 300,
  },
  movieName: {
    color: theme.color.text,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "left",
    width: "100%",
  },
  details: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },
  text: {
    color: theme.color.grey,
  },
  rating: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
