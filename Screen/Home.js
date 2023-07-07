import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import {PostsScreen} from './PostsScreen';
import {ProfileScreen} from './ProfileScreen';
  
  const Tabs = createBottomTabNavigator();
  
  const Home = () => {
    return (
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
  
            if (route.name === "Posts") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "CreatePosts") {
              iconName = focused ? "ios-list-box" : "ios-list";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tabs.Screen name="Posts" component={PostsScreen} />
        <Tabs.Screen name="CreatePosts" component={CreatePostsScreen} />
        <Tabs.Screen name="Profile" component={ProfileScreen} />
      </Tabs.Navigator>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  });
  
  export default Home;