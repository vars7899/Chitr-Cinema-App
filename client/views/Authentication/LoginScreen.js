import { Button, FormControl, Input } from "native-base";
import { useState } from "react";
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  ImageBackground,
  ScrollView,
} from "react-native";
import { theme } from "../../global";
import globalStyles from "../../globalStyle";
import styles from "./LoginScreenStyle";

const LoginScreen = () => {
  const { width, height } = useWindowDimensions();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  console.log(userEmail, userPassword);

  return (
    <ScrollView
      style={[styles.container, { width }]}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require("../../assets/p.webp")}
          style={{ height: height / 3 }}
          resizeMode="cover"
        >
          <View style={[styles.logoImageContainer]}>
            <Image
              source={require("../../assets/lg.png")}
              style={styles.logoImage}
            />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.formContainer}>
        <View>
          <Text
            style={[
              globalStyles.lightText,
              globalStyles.xlText,
              globalStyles.boldText,
            ]}
          >
            Hello Again!
          </Text>
          <Text style={[globalStyles.smText, globalStyles.greyText]}>
            Welcome back you are been missed!
          </Text>
        </View>
        <View>
          <FormControl isInvalid w="100%" paddingTop="4">
            <FormControl.Label>Email</FormControl.Label>
            <Input
              placeholder="Enter Email Address"
              type="text"
              color={theme.color.text}
              onChangeText={setUserEmail}
              autoComplete="email"
              keyboardType="email-address"
            />
          </FormControl>
          <FormControl isInvalid w="100%" paddingTop="4">
            <FormControl.Label>Password</FormControl.Label>
            <Input
              placeholder="Enter password"
              type="password"
              color={theme.color.text}
              onChangeText={setUserPassword}
            />
          </FormControl>
          <View style={styles.forgotPassword}>
            <Button variant="link" p={0} colorScheme="gray">
              Forgot Password?
            </Button>
          </View>
          <Button my={6} colorScheme="red">
            Login
          </Button>
          <View style={styles.signUpText}>
            <Text style={[globalStyles.greyText, globalStyles.smText]}>
              Don't have an account?
            </Text>
            <Button variant="link" colorScheme="red">
              Sign Up
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
