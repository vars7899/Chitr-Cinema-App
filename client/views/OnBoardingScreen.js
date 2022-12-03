import React, { useState, useRef } from "react";
import { View, Text, FlatList, Animated } from "react-native";
import OnBoardCar from "../components/OnBoard/OnBoardCar";
import PageBar from "../components/OnBoard/PageBar";
import onBoardData from "../data/onBoardData";

const OnBoardingScreen = () => {
  const slideRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  // update the current index of carousel
  const updateViewChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  // move to next slide
  const scrollTo = () => {
    if (currentIndex < onBoardData.length - 1) {
      slideRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      console.log("last");
    }
  };

  return (
    <View>
      <View style={{ flex: 3 }}>
        <FlatList
          data={onBoardData}
          horizontal
          showHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          renderItem={({ item }) => (
            <OnBoardCar item={item} scrollTo={scrollTo} />
          )}
          keyExtractor={(item) => item._id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          onViewableItemsChanged={updateViewChanged}
          viewabilityConfig={viewConfig}
          scrollEventThrottle={32}
          ref={slideRef}
        />
        <PageBar data={onBoardData} scrollX={scrollX} />
      </View>
    </View>
  );
};

export default OnBoardingScreen;
