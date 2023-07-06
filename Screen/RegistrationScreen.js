import { useState,useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  ImageBackground,
  Alert,
  Dimensions,
  ScrollView,
} from "react-native";

import { AntDesign } from '@expo/vector-icons'; 
import Photo from '../assets/images/photo.png';

export  const Registration = () => {
  const [login, onChangeLogin] = useState(""); // Стан для збереження значення поля "Логін"
  const [email, onChangeEmail] = useState("");  // Стан для збереження значення поля "Адреса електронної пошти"
  const [password, onChangePassword] = useState(""); // Стан для збереження значення поля "Пароль"
  const [showPassword, setShowPassword] = useState(true); // Стан для визначення видимості пароля

  const [isFocusedEmail, setIsFocusedEmail] = useState(false); // Стан для визначення активності поля "Адреса електронної пошти"
  const [isFocusedPassword, setIsFocusedPassword] = useState(false); // Стан для визначення активності поля "Пароль"
  const [isFocusedLogin, setIsFocusedLogin] = useState(false);  // Стан для визначення активності поля "Логін"

  const [phoneWidth, setPhoneWidth] = useState(Dimensions.get('window').width); // Стан для збереження ширини екрану
  const [phoneHeight, setPhoneHeight] = useState(
    Dimensions.get('window').height
  ); // Стан для збереження висоти екрану

  useEffect (() => {
    const onChange = () => {
      const width = Dimensions.get('window').width; // Отримання ширини вікна
      setPhoneWidth(width); // Оновлення значення ширини пристрою

      const height = Dimensions.get('window').height; // Отримання висоти вікна
      setPhoneHeight(height); // Оновлення значення висоти пристрою
    };
    const addListener = Dimensions.addEventListener('change', onChange); // Додавання слухача на зміни розміру вікна

    return () => addListener.remove(); // Видалення слухача при виході з компонента
  },[])

  const behavior = Platform.OS === "ios" ? "padding" : "height";
  const keyboardVerticalOffset = Platform.OS === "ios" ? -120 : -160;

  const togleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const onLogin = () => {
    Alert.alert(
      "Credentials",
      `name : ${login} , email: ${email},  password: ${password}`
    );
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <ImageBackground style={styles.imageBg} source={Photo}>
        <ScrollView>
        <View
                style={{
                  ...styles.containerWrapper,
                  width: phoneWidth,

                  marginTop: phoneWidth > 400 ? 200 : 300,
                }}
              >
        <KeyboardAvoidingView
          behavior={behavior}
          keyboardVerticalOffset={keyboardVerticalOffset}
          style={styles.container}
        >
          <View style={styles.form}>
            <View style={{...styles.photoWrap,
            left: (phoneWidth - 120) /2,
            }}>
              <TouchableOpacity
                style={{ position: "absolute", bottom: 14, right: -14 }}
              >
                <View>
                <AntDesign name="pluscircleo" size={25} color="#FF6C00"/>
                </View>
              </TouchableOpacity>
            </View>
            <Text style={styles.formTitle}>Реєстрація</Text>
            <View style={{ width: phoneWidth - 16 * 2 }}>
              <TextInput
                value={login}
                onChangeText={onChangeLogin}
                style={[
                  styles.input,
                  {
                    borderColor: isFocusedLogin ? "#FFA500" : "#ccc",
                    borderWidth: isFocusedLogin ? 2 : 1,
                  },
                ]}
                onFocus={() => setIsFocusedLogin(true)}
                onBlur={() => setIsFocusedLogin(false)}
                placeholder="Логін"
              />
            </View>

            <View>
              <TextInput
                value={email}
                onChangeText={onChangeEmail}
                style={[
                  styles.input,
                  {
                    borderColor: isFocusedEmail ? "#FFA500" : "#ccc",
                    borderWidth: isFocusedEmail ? 2 : 1,
                  },
                ]}
                onFocus={() => setIsFocusedEmail(true)}
                onBlur={() => setIsFocusedEmail(false)}
                placeholder="Адреса електронної пошти"
              />
            </View>
            <View style={{ position: "relative" }}>
              <TextInput
                value={password}
                onChangeText={onChangePassword}
                secureTextEntry={showPassword}
                style={[
                  styles.input,
                  {
                    borderColor: isFocusedPassword ? "#FFA500" : "#ccc",
                    borderWidth: isFocusedPassword ? 2 : 1,
                  },
                ]}
                onFocus={() => setIsFocusedPassword(true)}
                onBlur={() => setIsFocusedPassword(false)}
                placeholder="Пароль"
              />
              <TouchableOpacity
                onPress={togleShowPassword}
                activeOpacity={0.8}
                style={styles.showPasswordWrap}
              >
                <Text style={styles.showPasswordTitle}>
                  {showPassword ? "Показати" : "Приховати"}
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={onLogin}
              activeOpacity={0.8}
              style={styles.btn}
            >
              <Text style={styles.btnTitle}>Зареєструватися</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => Alert.alert("Work ask")}
            >
              <Text style={styles.linkTitle}>Вже є аккаунт? Увійти</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>

    </ScrollView>
  </ImageBackground>
  </TouchableWithoutFeedback>

);
            }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
imageBg: {
   flex: 1, width: "100%" 
  },
  containerWrapper:{
    flex: 1,
  },
form: {
  backgroundColor: "#fff",
  borderTopLeftRadius: 25,
  borderTopRightRadius: 25,
  paddingHorizontal: 16,
  paddingTop: 90,
  paddingBottom: 60,
  position: "relative",
},

formTitle: {
  fontSize: 30,
  fontWeight: 500,
  lineHeight: 35,
  textAlign: "center",
  color: "#212121",
  marginBottom: 20,
},

input: {
  height: 50,
  marginTop: 12,
  borderWidth: 1,
  borderColor: "#E8E8E8",
  borderRadius: 8,
  padding: 10,
  backgroundColor: "#F6F6F6",
},

btn: {
  backgroundColor: "#FF6C00",
  borderRadius: 100,
  height: 50,
  alignItems: "center",
  justifyContent: "center",
  marginTop: 50,
},

btnTitle: {
  fontSize: 16,
  lineHeight: 19,
  color: "#FFFFFF",
},
linkTitle: {
  fontSize: 16,
  lineHeight: 19,
  textAlign: "center",
  color: "#1B4371",
  marginTop: 20,
},
showPasswordWrap: {
  position: "absolute",
  top: 28,
  right: 16,
},

showPasswordTitle: {
  fontSize: 16,
  lineHeight: 19,
  color: "#1B4371",
},
photoWrap: {
  width: 120,
  height: 120,
  backgroundColor: "#F6F6F6",
  position: "absolute",
  top: "-19%",
  left: "37%",
  borderRadius: 16,
},
});