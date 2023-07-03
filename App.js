import { useFonts } from 'expo-font';
import { StatusBar } from "expo-status-bar";
import {View,StyleSheet,} from "react-native";
import {Registration} from "./Screen/RegistrationScreen";
// import {Login} from "./Screen/LoginScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold: require('./assets/fonts/Roboto-Bold.ttf'), 
    Roboto_400Regular: require('./assets/fonts/Roboto-Regular.ttf'),
    Roboto_500Medium: require('./assets/fonts/Roboto-Medium.ttf'), 
  });
 
  if (!fontsLoaded) {
    return null;
  }

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