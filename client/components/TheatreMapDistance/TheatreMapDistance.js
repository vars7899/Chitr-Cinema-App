import React, { useEffect, useRef, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View, Text, useWindowDimensions } from "react-native";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_API_KEY } from "../../keys";
import { theme } from "../../global";
import * as Location from "expo-location";

let coordinate = {
  latitude: 37.3317876,
  longitude: -122.0054812,
};

const TheatreMapDistance = () => {
  const mapRef = useRef();
  const { width, height } = useWindowDimensions();
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [destination, setDestination] = useState({
    latitude: null,
    longitude: null,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [origin, setOrigin] = useState({
    latitude: null,
    longitude: null,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    (async () => {
      if (!coordinate.latitude && !coordinate.longitude) {
        setErrorMsg("Missing Destination coordinates");
      }
      setDestination((prev) => ({
        ...prev,
        latitude: coordinate.latitude,
        longitude: coordinate.longitude,
      }));
      setIsLoading(true);
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        setIsLoading(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setOrigin((prev) => ({
        ...prev,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      }));
      setIsLoading(false);
    })();
  }, []);
  if (isLoading) {
    <View>
      <Text>Loading........</Text>
    </View>;
  }
  if (location && coordinate) {
    return (
      <View style={styles.container}>
        <MapView
          style={[{ width, height }]}
          ref={mapRef}
          initialRegion={origin}
        >
          <Marker coordinate={origin} />
          <Marker coordinate={destination} />
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_API_KEY}
            strokeWidth={3}
            strokeColor={theme.color.accent1}
            optimizeWaypoints={true}
            onReady={(result) =>
              mapRef.current.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: 30,
                  bottom: 30,
                  left: 30,
                  top: 20,
                },
              })
            }
          />
        </MapView>
      </View>
    );
  } else {
    <View>
      <Text>{errorMsg}</Text>;
    </View>;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default TheatreMapDistance;
