import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import  RegistrationScreen from './Screen/RegistrationScreen';
import LoginScreen from './Screen/LoginScreen';
import Home from './Screen/Home';

const AuthStack = createNativeStackNavigator(); // вказує на групу навігаторів

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
      <AuthStack.Navigator style={styles.container}>
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  logoutBtn: {
    marginRight: 16,
  },
});

// {!onLogin ? (
//   <>
//    <MainStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false}}/>
//   <MainStack.Screen name="Register" component={RegistrationScreen} options={{ headerShown: false}} /> {/* Аналог Route */} 
//   </>
//  ): (
//   <>
//    <MainStack.Screen name="Home" component={Home} options={{ headerShown: false}}/>
   {/* <MainStack.Screen name = "PostsScreen" component={PostsScreen}/>
   <MainStack.Screen name = "CreatePostsScreen" component={CreatePostsScreen}/>
   <MainStack.Screen name = "ProfileScreen" component={ProfileScreen}/> */}
//   </> )
//  }  