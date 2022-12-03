import { ImageBackground, Text, View, Image } from "react-native";
import styles from "./TicketCardStyle";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { theme } from "../../global";

const TicketCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <View style={styles.upperContainerName}>
          <Text style={[styles.text, styles.boldText]}>
            Thor: Love and thunder
          </Text>
          <AntDesign name="upload" size={24} color={theme.color.dark} />
        </View>
        <View style={styles.upperContainerDesc}>
          <MaterialIcons name="4k" size={36} color={theme.color.dark} />
          <Text style={[styles.smText, styles.semiBoldText]}>
            4DX Dolby Atmos
          </Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require("../../assets/o4.png")}
          style={{ height: 100 }}
        />
        <View style={styles.theatreAddress}>
          <Text style={[styles.lgText, styles.boldText, styles.lightText]}>
            Cineplex Park Royal
          </Text>
          <Text style={[styles.lightText, styles.semiBoldText]}>
            North Vancouver, BC
          </Text>
        </View>
      </View>
      <View style={styles.dateAndTime}>
        <View style={[styles.flexCenter]}>
          <Text style={[styles.greyText, styles.smText]}>Date</Text>
          <Text style={[styles.text, styles.boldText]}>11 July 2022</Text>
        </View>
        <View style={[styles.flexCenter]}>
          <Text style={[styles.greyText, styles.smText]}>Time</Text>
          <Text style={[styles.text, styles.boldText]}>10:55</Text>
        </View>
      </View>
      <View style={styles.seat}>
        <View style={[styles.flexCenter]}>
          <Text style={[styles.greyText, styles.smText]}>Hall</Text>
          <Text style={[styles.lgText, styles.boldText]}>13</Text>
        </View>
        <View style={[styles.flexCenter]}>
          <Text style={[styles.greyText, styles.smText]}>Row</Text>
          <Text style={[styles.lgText, styles.boldText]}>9</Text>
        </View>
        <View style={[styles.flexCenter]}>
          <Text style={[styles.greyText, styles.smText]}>Seat</Text>
          <Text style={[styles.lgText, styles.boldText]}>A</Text>
        </View>
      </View>
      <View style={styles.tear}>
        <View style={[styles.bigDot, styles.dotLeft]} />
        <View style={[styles.bigDot, styles.dotRight]} />
      </View>
      <View style={[styles.flexCenter, styles.qrContainer]}>
        <Image
          source={require("../../assets/qr.png")}
          style={{ height: 200, width: 200 }}
        />
        <Text
          style={[
            styles.greyText,
            styles.xsText,
            {
              marginVertical: 20,
              textAlign: "center",
            },
          ]}
        >
          The PDF file containing the receipt and a copy of the ticket have been
          sent to the e-mail address
        </Text>
      </View>
    </View>
  );
};

export default TicketCard;
