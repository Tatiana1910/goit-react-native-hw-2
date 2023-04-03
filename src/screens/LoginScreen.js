import { useEffect, useState } from "react";

import {
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  TextInput,
  StyleSheet,
  Keyboard,
} from "react-native";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const initialState = {
  email: "",
  password: "",
};

const loadApplication = async () => {
  await Font.loadAsync({
    "Roboto-Regular": require("../fonts/Roboto-Regular.ttf"),
  });
};

const LoginScreen = () => {
  const [isShownKeyboard, setIsShownKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [iasReady, setIasReady] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const keyboardHide = () => {
    setIsShownKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  if (!iasReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onFinish={() => setIasReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={{ ...styles.image, marginBottom: isShownKeyboard ? -180 : 0 }}
          source={require("../images/bg.jpg")}
        >
          <View
            style={{
              ...styles.formContainer,
              marginBottom: isShownKeyboard ? 30 : 0,
            }}
          >
            <View style={styles.form}>
              <Text style={styles.page}>Войти</Text>
              <TextInput
                style={{
                  ...styles.input,
                  borderColor: isEmail ? "#ff6c00" : "#e8e8e8",
                  backgroundColor: isEmail ? "#fff" : "#f6f6f6",
                }}
                onBlur={() => setIsEmail(false)}
                placeholder="Адрес электронной почты"
                value={state.email}
                onFocus={() => {
                  setIsShownKeyboard(true);
                  setIsEmail(true);
                }}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
              />
              <View style={{ position: "relative" }}>
                <TextInput
                  style={{
                    ...styles.inputPassword,
                    borderColor: isPassword ? "#ff6c00" : "#e8e8e8",
                    backgroundColor: isPassword ? "#fff" : "#f6f6f6",
                  }}
                  placeholder="Пароль"
                  secureTextEntry={isPasswordHidden}
                  value={state.password}
                  onFocus={() => {
                    setIsShownKeyboard(true);
                    setIsPassword(true);
                  }}
                  onBlur={() => setIsPassword(false)}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                />
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.btnPassword}
                  onPress={() => {
                    setIsPasswordHidden((prevState) => !prevState);
                  }}
                >
                  <Text style={styles.textPassword}>
                    {isPasswordHidden ? "Показать" : "Скрыть"}
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.button}
                onPress={keyboardHide}
              >
                <Text style={styles.text}>Войти</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.link}>Нет аккаунта? Зарегистрироваться</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },

  formContainer: {
    flex: 0,
    alignItems: "center",
    // justifyContent: "flex-end",
    backgroundColor: "#fff",
    marginTop: 323,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: "60%",
  },
  form: {
    flex: 0,
    width: "100%",
  },
  page: {
    alignSelf: "center",
    marginTop: 32,
    marginBottom: 32,
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    fontFamily: "Roboto-Regular",
  },
  input: {
    marginHorizontal: 16,
    padding: 16,
    // backgroundColor: "#F6F6F6",
    borderWidth: 1,
    // borderColor: "#E8E8E8",
    borderRadius: 8,
    fontSize: 16,
    lineHeight: 19,
  },
  inputPassword: {
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 43,
    padding: 16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    fontSize: 16,
    lineHeight: 19,
  },
  btnPassword: {
    position: "absolute",
    top: 35,
    right: 35,
  },
  textPassword: {
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
  },
  button: {
    marginHorizontal: 16,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  text: {
    alignSelf: "center",
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto-Regular",
  },
  link: {
    marginTop: 16,
    marginBottom: 111,
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto-Regular",
  },
});
