import { useState } from "react";
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
  useWindowDimensions,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const initialState = {
  login: "",
  email: "",
  password: "",
};

const loadApplication = async () => {
  await Font.loadAsync({
    "Roboto-Regular": require("../fonts/Roboto-Regular.ttf"),
  });
};

const RegistrationScreen = () => {
  const [isShownKeyboard, setIsShownKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [iasReady, setIasReady] = useState(false);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  const { width } = useWindowDimensions();

  const keyboardHide = () => {
    setIsShownKeyboard(false);
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    keyboardHide();
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
          style={styles.image}
          source={require("../images/bg.jpg")}
        >
          <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"}>
            <View
              style={{
                ...styles.form,
                paddingBottom: isShownKeyboard ? 0 : 70,
              }}
            >
              <View style={styles.photoContainer}>
                <View style={styles.imageThumb}></View>
                <TouchableOpacity style={styles.imageBtn} activeOpacity={0.7}>
                  <Icon
                    name="pluscircleo"
                    size={30}
                    color="#FF6C00"
                    margin="auto"
                  />
                </TouchableOpacity>
              </View>

              <View style={{ width: width - 2 * 16 }}>
                <View style={styles.header}>
                  <Text style={styles.title}>Регистрация</Text>
                </View>

                <View style={{ marginBottom: 16 }}>
                  <TextInput
                    style={{
                      ...styles.input,
                      borderColor: isLogin ? "#ff6c00" : "#e8e8e8",
                      backgroundColor: isLogin ? "#fff" : "#f6f6f6",
                    }}
                    onBlur={() => setIsLogin(false)}
                    placeholder="Логин"
                    value={state.login}
                    onFocus={() => {
                      setIsShownKeyboard(true);
                      setIsLogin(true);
                    }}
                    onChangeText={(value) =>
                      setState((prevState) => ({ ...prevState, login: value }))
                    }
                  />
                </View>
                <View style={{ marginBottom: 16 }}>
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
                </View>

                <View style={{ position: "relative" }}>
                  <TextInput
                    style={{
                      ...styles.input,
                      marginTop: 16,
                      marginBottom: 43,
                      borderColor: isPassword ? "#ff6c00" : "#e8e8e8",
                      backgroundColor: isPassword ? "#fff" : "#f6f6f6",
                    }}
                    placeholder="Пароль"
                    secureTextEntry={isPasswordHidden}
                    value={state.password}
                    onBlur={() => setIsPassword(false)}
                    onFocus={() => {
                      setIsShownKeyboard(true);
                      setIsPassword(true);
                    }}
                    onChangeText={(value) =>
                      setState((prevState) => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                  />
                  <TouchableOpacity
                    activeOpacity={0.7}
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

                {!isShownKeyboard && (
                  <View>
                    <TouchableOpacity
                      style={styles.button}
                      activeOpacity={0.7}
                      onPress={handleSubmit}
                    >
                      <Text style={styles.btnTitle}>Зарегистрироваться</Text>
                    </TouchableOpacity>
                    <View style={styles.link}>
                      <Text style={styles.linkTitle}>
                        Уже есть аккаунт? Войти
                      </Text>
                    </View>
                  </View>
                )}
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  form: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: "relative",
    paddingTop: 92,
  },
  photoContainer: {
    position: "absolute",
    top: "-10%",
    width: 132,
    height: 120,
  },
  imageThumb: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  imageBtn: {
    position: "absolute",
    right: "-5%",
    bottom: "10%",
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    borderRadius: 25,
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 32,
  },
  title: {
    fontSize: 30,
    fontWeight: "500",
    lineHeight: 35,
    letterSpacing: 0.01,
    color: "#212121",
    fontFamily: "Roboto-Regular",
  },
  input: {
    borderWidth: 1,
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    fontFamily: "Roboto-Regular",
    backgroundColor: "#F6F6F6",
  },
  btn: {
    position: "absolute",
    top: 16,
    right: 16,
  },
  textPassword: {
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
  },
  btnPassword: {
    position: "absolute",
    top: 30,
    right: 25,
  },

  button: {
    borderWidth: 1,
    height: 50,
    borderRadius: 100,
    marginTop: 43,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff6c00",
    borderColor: "transparent",
  },
  btnTitle: {
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
    fontFamily: "Roboto-Regular",
  },
  link: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  linkTitle: {
    color: "#1b4371",
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto-Regular",
  },
});
