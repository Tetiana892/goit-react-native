
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import useRoute from './Screen/Home';

export default function App() {

  const routing = useRoute(null);

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
  {routing}
  </NavigationContainer>
);
};

