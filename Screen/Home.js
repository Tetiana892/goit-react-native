
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from "@expo/vector-icons";
import {Feather} from  "@expo/vector-icons";
import {Ionicons} from "@expo/vector-icons";
import { StyleSheet , TouchableOpacity} from "react-native";

import PostsScreen from './PostsScreen';
import ProfileScreen from './ProfileScreen';
import CreatePostsScreen from './CreatePostsScreen';
  
  const Tabs = createBottomTabNavigator();

  const Home = () => {
    const navigation = useNavigation();
    return(
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarLabel: () => null,
          tabBarIcon: () => {
            if (route.name === 'PostsScreen') {
              return (
                <AntDesign
                  name="appstore-o"
                  size={24}
                  color="#212121"
                  style={styles.postsIcon}
                />
              );
            } else if (route.name === 'CreatePostScreen') {
              return (
                <AntDesign
                  name="pluscircleo"
                  size={24}
                  color="#fff"
                  style={styles.addIcon}
                />
              );
            } else if (route.name === 'ProfileScreen') {
              return (
                <AntDesign
                  name="user"
                  size={24}
                  color="#212121"
                  style={styles.profileIcon}
                />
              );
            }
          },
          tabBarStyle: styles.tabBar,
        })}
      >
      <Tabs.Screen
        name="PostsScreen"
        size
        component={PostsScreen}
        options={{
          title: 'Публікації',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 88,
            borderBottomColor: '#BDBDBD',
            borderBottomWidth: 1,
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 500,
            fontSize: 17,
          },
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 16 }}>
              <Feather name="log-out" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="CreatePostScreen"
        component={CreatePostsScreen}
        options={{
          title: 'Створити публікацію',

          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 88,

            borderBottomColor: '#BDBDBD',
            borderBottomWidth: 1,
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 500,
            fontSize: 17,
          },
          tabBarStyle: { display: 'none' },

          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('PostsScreen')}
            >
              <Ionicons
                name="ios-arrow-back"
                size={24}
                color="#212121"
                style={{ marginLeft: 16 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      </Tabs.Navigator>
    );
  };
  
  
  export default Home;

  const styles = StyleSheet.create({
    tabBar: {
      height: 83,
      padding: 0,
      margin: 0,
    },
    addIcon: {
      width: 70,
      height: 40,
      marginTop: 9,
      marginBottom: 34,
      textAlign: 'center',
      textAlignVertical: 'center',
  
      backgroundColor: '#FF6C00',
      borderRadius: 20,
    },
    profileIcon: {
      width: 24,
      height: 24,
  
      marginRight: 89,
      marginBottom: 42,
      marginTop: 17,
    },
    postsIcon: {
      width: 24,
      height: 24,
  
      marginLeft: 90,
      marginBottom: 42,
      marginTop: 17,
    },
  });