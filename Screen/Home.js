
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import  RegistrationScreen from './RegistrationScreen';
import LoginScreen from './LoginScreen';

import PostsScreen  from './MainScreen/PostsScreen';
import CreatePostsScreen from './MainScreen/CreatePostsScreen';
import ProfileScreen from './MainScreen/ProfileScreen';

import { AntDesign } from '@expo/vector-icons'; 

const MainStack = createStackNavigator(); // вказує на групу навігаторів
const Tabs = createBottomTabNavigator();

const useRoute =(isAuth) => {
    if(!isAuth) {
      return (
      <MainStack.Navigator initialRouteName="RegistrationScreen" >    
      <MainStack.Screen name="Registration" component={RegistrationScreen} options={{ headerShown: false}} /> {/* Аналог Route */}
      <MainStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false}}/>
   </MainStack.Navigator> 
   );
  }
  return ( 
  <Tabs.Navigator tabBarOptions = {{showLabel: false}}>
  <Tabs.Screen options={{
    tabBarIcon:({focused, color, size}) =>{
        <AntDesign name="appstore-o" size={size} color={color} />
    }
  }}
   name='Post'component={PostsScreen}/>
  <Tabs.Screen
  options={{
    tabBarIcon:({focused, color, size}) =>{
        <AntDesign name="pluscircleo" size={size} color={color} />
    }
  }}
  name='CreatePosts'component={CreatePostsScreen}/>
  <Tabs.Screen
  options={{
    tabBarIcon:({focused, color, size}) =>{
        <AntDesign name="user" size={size} color={color} />
    }
  }}
  name='Profile'component={ProfileScreen}/>
  </Tabs.Navigator>
  );
  }

  export default useRoute;





  
 

  