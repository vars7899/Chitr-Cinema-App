import { View, Text } from "react-native";
import globalStyles from "../../globalStyle";
import styles from "./TheatreInfoCardStyle";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../global";

const TheatreInfoCard = ({ theatre }) => {
  return (
    <View style={styles.container}>
      <View style={styles.nameHeader}>
        <View>
          <Text
            style={[
              globalStyles.lightText,
              globalStyles.text,
              globalStyles.semiBoldText,
            ]}
          >
            {theatre.name}
          </Text>
          <Text style={[globalStyles.greyText, globalStyles.xsText]}>
            {theatre.street} {theatre.city} {theatre.state}
          </Text>
        </View>
        <Ionicons name="navigate" size={16} color={theme.color.white1} />
      </View>
    </View>
  );
};

export default TheatreInfoCard;
