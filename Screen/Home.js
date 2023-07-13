import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, TouchableOpacity } from "react-native";
// import { useNavigation } from '@react-navigation/native';
import PostsScreen  from './MainScreen/PostsScreen';
import CreatePostsScreen from './MainScreen/CreatePostsScreen';
import ProfileScreen from './MainScreen/ProfileScreen';
// import icons
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const MainTab = createBottomTabNavigator();

export default function Home({ navigation }) {
  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 85,
          paddingTop: 10,
          paddingBottom: 35,
          paddingHorizontal: 70,
        },
      }}
    >
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <SimpleLineIcons name="grid" size={24} color="#212121" />
          ),
          headerTintColor: "#212121",
          headerTitleStyle: {
            fontFamily: "R-Medium",
            fontSize: 17,
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              title="Log out"
              color="#fff"
            >
              <MaterialIcons
                style={styles.logoutBtn}
                name="logout"
                size={24}
                color="#BDBDBD"
              />
            </TouchableOpacity>
          ),
        }}
        name="Публікації"
        component={PostsScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign name="plus" size={18} color="#FFF" />
          ),
          headerTintColor: "#212121",
          headerTitleStyle: {
            fontFamily: "R-Medium",
            fontSize: 17,
          },
          tabBarIconStyle: {
            border: 1,
            backgroundColor: "#FF6C00",
            borderRadius: 20,
            maxHeight: 40,
            width: 70,
          },
        }}
        name="Створити публікацію"
        component={CreatePostsScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather name="user" size={24} color="#212121" />
          ),
          headerShown: false,
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
}

const styles = StyleSheet.create({
  logoutBtn: {
    marginRight: 16,
  },
});

   


{/* <Tabs.Navigator
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
          } else if (route.name === 'CreatePostsScreen') {
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
name="CreatePostsScreen"
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
</Tabs.Navigator> */}
  
  
 

  