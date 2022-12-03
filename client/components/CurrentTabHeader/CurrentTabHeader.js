import { Text, useWindowDimensions, View } from "react-native";
import globalStyles from "../../globalStyle";
import styles from "./CurrentTabHeaderStyle";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../global";

const CurrentTabHeader = ({ currentTab, backTo }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Ionicons name="chevron-back" size={24} color={theme.color.text} />
      <Text style={[globalStyles.lightText, globalStyles.text, styles.tabText]}>
        {currentTab}
      </Text>
    </View>
  );
};

export default CurrentTabHeader;
