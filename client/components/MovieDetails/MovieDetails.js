import { View, Text } from "react-native";
import styles from "./MovieDetailsStyle";
import globalStyles from "../../globalStyle";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { theme } from "../../global";

const MovieDetails = () => {
  return (
    <View style={styles.container}>
      <Text
        style={[
          globalStyles.lgText,
          globalStyles.boldText,
          globalStyles.lightText,
        ]}
      >
        Sonic The hedgehog 2
      </Text>
      <View style={styles.feature}>
        <MaterialIcons name="8k" size={36} color={theme.color.white1} />
        <FontAwesome
          name="audio-description"
          size={26}
          color={theme.color.white1}
        />
        <Text
          style={[
            globalStyles.smText,
            globalStyles.semiBoldText,
            globalStyles.lightText,
            { marginLeft: 5 },
          ]}
        >
          4DX Dolby Atmos
        </Text>
      </View>
    </View>
  );
};

export default MovieDetails;
