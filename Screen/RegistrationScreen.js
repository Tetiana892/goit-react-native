import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
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
} from "react-native";

import { AntDesign } from '@expo/vector-icons'; 
import Photo from '../assets/images/photo.png';

export  const RegistrationScreen = () => {

  const navigation = useNavigation();

  const [login, onChangeLogin] = useState(""); // Стан для збереження значення поля "Логін"
  const [email, onChangeEmail] = useState("");  // Стан для збереження значення поля "Адреса електронної пошти"
  const [password, onChangePassword] = useState(""); // Стан для збереження значення поля "Пароль"
  const [showPassword, setShowPassword] = useState(true); // Стан для визначення видимості пароля

  const [isFocusedEmail, setIsFocusedEmail] = useState(false); // Стан для визначення активності поля "Адреса електронної пошти"
  const [isFocusedPassword, setIsFocusedPassword] = useState(false); // Стан для визначення активності поля "Пароль"
  const [isFocusedLogin, setIsFocusedLogin] = useState(false);  // Стан для визначення активності поля "Логін"


  const behavior = Platform.OS === "ios" ? "padding" : "height";
  const keyboardVerticalOffset = Platform.OS === "ios" ? -120 : -160;

  const togleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const onLogin = () => {
    if (!login.trim() || !email.trim() || !password.trim()) {
      Alert.alert(`Усі поля мають бути заповнені!`); // Попередження, якщо не всі поля заповнені
      return;
    }
    Alert.alert(`${login}, успішно зареєстровані!`); // Повідомлення про успішну реєстрацію
    console.log('login: ' + login, 'email: ' + email, 'password: ' + password); // Виведення значень полів "Логін", "Адреса електронної пошти" та "Пароль" у консоль
    onChangeLogin(''); // Скидання значення поля "Логін"
    onChangeEmail(''); 
    onChangePassword(''); 
    // Keyboard.dismiss(); // Закриття клавіатури
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
    <ImageBackground style={styles.imageBg} source={Photo}>
       <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <KeyboardAvoidingView
          behavior={behavior}
          keyboardVerticalOffset={keyboardVerticalOffset}
        >
          <View style={styles.form}>
            <View style={styles.photoWrap}>
              <TouchableOpacity
                style={{ position: "absolute", bottom: 14, right: -14 }}
              >
                <View>
                <AntDesign name="pluscircleo" size={25} color="#FF6C00"/>
                </View>
              </TouchableOpacity>
            </View>
            <Text style={styles.formTitle} >Реєстрація</Text>
            <View>
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
                type= {"login"}
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
                type={"email"}
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
                type={"password"}
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
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.linkTitle}
             
              >Вже є аккаунт? Увійти</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
      </TouchableWithoutFeedback>
  </ImageBackground>
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
imageBg: {
   flex: 1,
    width: "100%" 
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