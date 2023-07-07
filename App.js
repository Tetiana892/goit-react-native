import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {Registration} from "./Screen/RegistrationScreen";
import {Login} from "./Screen/LoginScreen";
import {Home} from "./Screen/HomeScreen";

const MainStack = createStackNavigator(); // вказує на групу навігаторів

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
    <NavigationContainer>
     <MainStack.Navigator initialRouteName="RegistrationScreen" >    
       <MainStack.Screen name="Registration" component={{Registration}} options={{ headerShown: false}} /> {/* Аналог Route */}
       <MainStack.Screen name="Login" component={Login} options={{ headerShown: false}}/>
       <MainStack.Screen name="Home" component={Home} options={{ headerShown: false }} />  
  </MainStack.Navigator>
  </NavigationContainer>
);
};

