import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import  RegistrationScreen from './Screen/RegistrationScreen.js';
import LoginScreen from './Screen/LoginScreen.js';
import Home from './Screen/Home';

const MainStack = createStackNavigator(); // вказує на групу навігаторів

export default function App() {
  // const routing = useRoute({});
  const [fontsLoaded] = useFonts({
    Roboto_700Bold: require('./assets/fonts/Roboto-Bold.ttf'), 
    Roboto_400Regular: require('./assets/fonts/Roboto-Regular.ttf'),
    Roboto_500Medium: require('./assets/fonts/Roboto-Medium.ttf'), 
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
  <NavigationContainer>
  <MainStack.Navigator initialRouteName="RegistrationScreen">    
      <MainStack.Screen name="RegistrationScreen" component={RegistrationScreen} options={{ headerShown: false}} /> {/* Аналог Route */}
      <MainStack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false}}/>
      <MainStack.Screen name="Home" component={Home} options={{ headerShown: false}}/>
   </MainStack.Navigator> 
  </NavigationContainer>);
};

