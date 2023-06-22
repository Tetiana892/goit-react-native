import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  Text,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
// import { useFonts } from "expo-font";

export default function App() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./assets/images/photo.png")}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View
            style={{ ...styles.form, marginBottom: isShowKeyboard ? 20 : 100 }}
          >
            <View>
              <Text style={styles.inputTitle}>Логін</Text>
              <TextInput
                style={styles.input}
                onFocus={() => setIsShowKeyboard(true)}
              />
            </View>

            <View>
              <Text style={styles.inputTitle}>Адреса електронної пошти</Text>
              <TextInput
                style={styles.input}
                onFocus={() => setIsShowKeyboard(true)}
              />
            </View>

            <View>
              <Text style={styles.inputTitle}>Пароль</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                onFocus={() => setIsShowKeyboard(true)}
              />
            </View>
            <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
              <Text>Зареєструватись</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    // alignItems: "center",

    width: 375,
    haight: 812,
  },
  input: {
    borderWidth: 1,
    width: 343,
    height: 50,
    borderRadius: 6,
  },
  inputTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  form: {
    marginHorizontal: 40,
  },
  btn: {
    backgroundColor: "#FF6C00",
    height: 40,
    borderRadius: 6,
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    ...Platform.select({
      ios: {
        backgroundColor: "transparent",
        borderColor: "#fof8ff",
      },
      android: {
        backgroundColor: "#fof8ff",
        borderColor: "transparent",
      },
    }),
  },
});
// const [fontsLoaded] = useFonts({
//   "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
// });
