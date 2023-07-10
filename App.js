import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import  RegistrationScreen from './Screen/RegistrationScreen.js';
import LoginScreen from './Screen/LoginScreen.js';
import {onLogin} from './Screen/RegistrationScreen.js';
import Home from './Screen/Home';
// import PostsScreen from './Screen/MainScreen/PostsScreen.js';
// import CreatePostsScreen from './Screen/MainScreen/CreatePostsScreen.js';
// import ProfileScreen from './Screen/MainScreen/ProfileScreen.js';

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
    <>
  <NavigationContainer>
  {!onLogin ? (
  <>
   <MainStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false}}/>
  <MainStack.Screen name="Register" component={RegistrationScreen} options={{ headerShown: false}} /> {/* Аналог Route */} 
  </>
 ): (
  <>
   <MainStack.Screen name="Home" component={Home} options={{ headerShown: false}}/>
   {/* <MainStack.Screen name = "PostsScreen" component={PostsScreen}/>
   <MainStack.Screen name = "CreatePostsScreen" component={CreatePostsScreen}/>
   <MainStack.Screen name = "ProfileScreen" component={ProfileScreen}/> */}
  </> )
 }  
  </NavigationContainer>
     <StatusBar style="auto" />
     </>
  );
};

 

