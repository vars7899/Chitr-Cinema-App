import {
  View,
  Text,
  ImageBackground,
  useWindowDimensions,
  Image,
  Alert,
} from "react-native";
import { useStripe, CardField } from "@stripe/stripe-react-native";
import { Button } from "native-base";
import { useEffect, useState } from "react";

const SplashScreen = () => {
  const { height, width } = useWindowDimensions();
  const { confirmPayment, initPaymentSheet, presentPaymentSheet } = useStripe();
  const [payKey, setPayKey] = useState();

  // async function handlePayment() {
  //   const { paymentIntent, error } = await confirmPayment(payKey, {
  //     paymentMethodType: "Card",
  //     defaultBillingDetails: {
  //       email: "john@gmail.com",
  //     },
  //   });
  //   if (error) {
  //     Alert.alert(error.message);
  //   } else {
  //     Alert.alert("payment successful", JSON.stringify(paymentIntent));
  //     // if successful go to the payment success
  //   }
  // }
  async function handlePaySheet() {
    const { error } = await presentPaymentSheet({
      clientSecret: payKey,
    });
    if (error) {
      Alert.alert(JSON.stringify(error));
    }
  }
  const initPayment = async () => {
    const response = await fetch(
      "http://10.0.0.164:8080/api/v1/create-payment-intent",
      {
        method: "POST",
      }
    );
    const data = await response.json();
    console.log(data.clientSecret);
    setPayKey(data.clientSecret);
    const { error } = await initPaymentSheet({
      merchantDisplayName: "The Svar Studio",
      paymentIntentClientSecret: data.clientSecret,
    });
    if (error) Alert.alert(JSON.stringify(error));
  };

  useEffect(() => {
    // fetch("http://10.0.0.164:8080/api/v1/create-payment-intent", {
    //   method: "POST",
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setPayKey(data.clientSecret);
    //     initPaymentSheet({
    //       paymentIntentClientSecret: payKey,
    //       defaultBillingDetails: {
    //         name: "Jane Doe",
    //       },
    //     }).catch((err) => console.log(err));
    //   })
    //   .catch((err) => console.log(err, "err"));
    initPayment();
  }, []);

  return (
    <View>
      <ImageBackground
        source={require("../../assets/p.webp")}
        style={[{ height, width }]}
        resizeMode="cover"
      >
        {/* <CardField
          postalCodeEnabled={false}
          style={{
            height: 50,
            width,
          }}
        /> */}
        <View
          style={{
            height: "100%",
            backgroundColor: "red",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#000000C6",
          }}
        >
          <Image
            source={require("../../assets/lg.png")}
            style={{
              height: 260,
              aspectRatio: 1 / 1,
            }}
          />
          {/* <Button onPress={handlePayment}>Pay now</Button> */}
          <Button onPress={handlePaySheet}>Pay portal</Button>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;
