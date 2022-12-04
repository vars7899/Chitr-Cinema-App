import { View, Text, TouchableOpacity, FlatList } from "react-native";
import globalStyles from "../../globalStyle";
import styles from "./TheatreInfoCardStyle";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../global";
import { useState } from "react";
import { availableDate, availableTime } from "../../data/theatreDat";

const TheatreInfoCard = ({ theatre }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  function handleSelectDate(date) {
    if (selectedDate === date) return setSelectedDate(null);
    setSelectedDate(date);
  }

  function handleSelectTime(time) {
    if (selectedTime === time) return setSelectedDate(null);
    setSelectedTime(time);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.nameHeader}
        onPress={() => setIsOpen((prev) => !prev)}
      >
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
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.dateSelectorContainer}>
          <FlatList
            data={availableDate}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={[
                  styles.dateCard,
                  selectedDate &&
                    selectedDate === item && {
                      backgroundColor: theme.color.green,
                    },
                  index === 0 && { marginLeft: 20 },
                ]}
                onPress={() => handleSelectDate(item)}
              >
                <Text
                  style={[
                    globalStyles.greyText,
                    globalStyles.smText,
                    globalStyles.semiBoldText,
                    selectedDate &&
                      selectedDate === item && {
                        color: theme.color.dark,
                      },
                  ]}
                >
                  {item.day}
                </Text>
                <Text
                  style={[
                    globalStyles.lightText,
                    globalStyles.text,
                    globalStyles.boldText,
                    selectedDate &&
                      selectedDate === item && {
                        color: theme.color.dark,
                      },
                  ]}
                >
                  {item.date}
                </Text>
              </TouchableOpacity>
            )}
            horizontal
          />
          <View style={{ marginTop: 20 }}>
            <FlatList
              data={availableTime}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  style={[
                    styles.timeCard,
                    selectedTime &&
                      selectedTime === item && {
                        backgroundColor: theme.color.green,
                      },
                    index === 0 && { marginLeft: 20 },
                  ]}
                  onPress={() => handleSelectTime(item)}
                >
                  <Text
                    style={[
                      globalStyles.greyText,
                      globalStyles.smText,
                      globalStyles.semiBoldText,
                      selectedTime &&
                        selectedTime === item && {
                          color: theme.color.dark,
                        },
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
              horizontal
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default TheatreInfoCard;
