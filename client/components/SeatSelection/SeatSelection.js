import { View, Text, TouchableOpacity } from "react-native";
import styles from "./SeatSelectionStyle";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../../global";
import { useState } from "react";
import globalStyles from "../../globalStyle";

const SeatSelection = () => {
  const initialRow = Array.from({ length: 10 }, (_, i) => {
    return Array.from({ length: 10 }, (_, j) => j);
  });
  const dummyUnAvailableSeats = [
    { row: 5, col: 4 },
    { row: 5, col: 5 },
    { row: 5, col: 6 },
    { row: 5, col: 7 },
    { row: 5, col: 8 },
    { row: 5, col: 1 },
  ];
  const [seatRow, setSeatRow] = useState(initialRow);
  const [unAvailableSeats, setUnAvailableSeats] = useState(
    dummyUnAvailableSeats
  );
  const [selectedSeats, setSelectedSeats] = useState([]);

  // function to handle select
  function handleSelect(row, col) {
    // seat is available
    if (unAvailableSeats.find((seat) => row === seat.row && col === seat.col)) {
      return alert("seat is unavailable");
    }
    // if already present remove it
    if (selectedSeats.find((seat) => seat.row === row && seat.col === col)) {
      setSelectedSeats(
        selectedSeats.filter((seat) => col !== seat.col || row !== seat.row)
      );
    } else {
      // add seat to selected
      return setSelectedSeats((prev) => [...prev, { row, col }]);
    }
  }

  return (
    <View style={styles.container}>
      <View style={[globalStyles.flexCenter, styles.screenLine]}>
        <Text
          style={[
            globalStyles.lightText,
            globalStyles.semiBoldText,
            globalStyles.xsText,
          ]}
        >
          Screen
        </Text>
      </View>
      {seatRow.map((item, indexRow) => (
        <View style={styles.seatRow}>
          {item.map((seat, indexColumn) => (
            <View
              style={
                // add some gap for row and column
                [
                  (indexColumn === 3 || indexColumn === 7) && {
                    marginLeft: 15,
                  },
                ]
              }
            >
              <TouchableOpacity
                style={{ padding: 4 }}
                onPress={() => handleSelect(indexRow, indexColumn)}
                activeOpacity={0.75}
              >
                <MaterialCommunityIcons
                  name="sofa-single"
                  size={24}
                  color={
                    selectedSeats.find(
                      (cur) => indexRow === cur.row && indexColumn === cur.col
                    )
                      ? theme.color.blue
                      : unAvailableSeats.find(
                          (cur) =>
                            indexRow === cur.row && indexColumn === cur.col
                        )
                      ? theme.color.grey
                      : theme.color.green
                  }
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      ))}
      <View style={styles.seatTypeDetails}>
        <View style={styles.seatTypeContainer}>
          <MaterialCommunityIcons
            name="sofa-single"
            size={24}
            color={theme.color.blue}
          />
          <Text
            style={[
              globalStyles.lightText,
              globalStyles.smText,
              styles.tabText,
            ]}
          >
            Selected
          </Text>
        </View>
        <View style={styles.seatTypeContainer}>
          <MaterialCommunityIcons
            name="sofa-single"
            size={24}
            color={theme.color.green}
          />
          <Text
            style={[
              globalStyles.lightText,
              globalStyles.smText,
              styles.tabText,
            ]}
          >
            Available
          </Text>
        </View>
        <View style={styles.seatTypeContainer}>
          <MaterialCommunityIcons
            name="sofa-single"
            size={24}
            color={theme.color.grey}
          />
          <Text
            style={[
              globalStyles.lightText,
              globalStyles.smText,
              styles.tabText,
            ]}
          >
            Taken
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SeatSelection;
