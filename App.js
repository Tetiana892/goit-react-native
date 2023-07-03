
import { StatusBar } from "expo-status-bar";
import {View,StyleSheet,} from "react-native";
import {Registration} from "./Screen/RegistrationScreen";
// import {Login} from "./Screen/LoginScreen";

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   // RobotoBold: require('./assets/fonts/Roboto-Bolt.ttf'), // Завантаження шрифту 
  //   // RobotoRegular: require('./assets/fonts/Roboto-Regular.ttf'),
  //   // RobotoMedium: require('./assets/fonts/Roboto-Medium.ttf'), 
  // });
 
  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <View style={styles.container}>
  <Registration/> 
  {/* <Login/> */}
  <StatusBar style="auto" />
  </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});