import { Button, FormControl, Input } from "native-base";
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
import styles from "./RegisterScreenStyle";

const RegisterScreen = () => {
  const { width, height } = useWindowDimensions();
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
            Sign Up
          </Text>
          <Text style={[globalStyles.smText, globalStyles.greyText]}>
            Your information is safe with us.
          </Text>
        </View>
        <View>
          <FormControl isInvalid w="100%" paddingTop="4">
            <FormControl.Label>Full Name</FormControl.Label>
            <Input
              placeholder="John Doe"
              type="password"
              color={theme.color.text}
            />
          </FormControl>
          <FormControl isInvalid w="100%" paddingTop="4">
            <FormControl.Label>Email</FormControl.Label>
            <Input
              placeholder="Enter Email Address"
              type="text"
              color={theme.color.text}
            />
          </FormControl>
          <FormControl isInvalid w="100%" paddingTop="4">
            <FormControl.Label>Password</FormControl.Label>
            <Input
              placeholder="Enter password"
              type="password"
              color={theme.color.text}
            />
          </FormControl>
          <FormControl isInvalid w="100%" paddingTop="4">
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input
              placeholder="Please re-enter password"
              type="password"
              color={theme.color.text}
            />
          </FormControl>
          <Button my={6} colorScheme="red">
            Sign Up
          </Button>
          <View style={styles.signUpText}>
            <Text style={[globalStyles.greyText, globalStyles.smText]}>
              Already have an account?
            </Text>
            <Button variant="link" colorScheme="red">
              Login In
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;
