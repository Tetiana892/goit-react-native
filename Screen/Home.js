import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from '@react-navigation/native';
import PostsScreen  from './MainScreen/PostsScreen.js';
import CreatePostsScreen from './MainScreen/CreatePostsScreen.js';
import ProfileScreen from './MainScreen/ProfileScreen.js';
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

const Home =() => {
  const navigation = useNavigation();
  return (
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
</Tabs.Navigator>
  
   );
   }
  export default Home;




// <Tabs.Navigator >
  // <Tabs.Screen options={{
  //   tabBarIcon:({focused, color, size}) =>{
  //       <AntDesign name="appstore-o" size={24} color="#212121"
  //       />
  //   }
  // }}
  //  name='Post'component={PostsScreen}/>
  // <Tabs.Screen
  // options={{
  //   tabBarIcon:({focused, color, size}) =>{
  //       <AntDesign name="pluscircleo" size={24} color="#212121"
  //       />
  //   }
  // }}
  // name='CreatePosts'component={CreatePostsScreen}/>
  // <Tabs.Screen
  // options={{
  //   tabBarIcon:({focused, color, size}) =>{
  //       <AntDesign name="user" size={24} color="#212121"
  //       />
  //   }
  // }}
  // name='Profile'component={ProfileScreen}/>
  // </Tabs.Navigator>
  
 

  