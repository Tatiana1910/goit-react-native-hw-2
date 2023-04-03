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
  Dimensions,
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

  const [dimensions, setdimensions] = useState(
    Dimensions.get("window").width - 16 * 2
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 16 * 2;

      setdimensions(width);
    };
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

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
              ...styles.contentThumb,
              marginBottom: isShownKeyboard ? 100 : 0,
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
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={styles.keybordContainer}
            >
              <View style={{ ...styles.form, width: dimensions }}>
                <Text style={styles.pageTitle}>Регистрация</Text>

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
                  <Text style={styles.text}>Зарегистрироваться</Text>
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  ...styles.linkText,
                  marginBottom: isShownKeyboard ? 0 : 45,
                }}
              >
                Уже есть аккаунт? Войти
              </Text>
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  keybordContainer: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  contentThumb: {
    position: "relative",
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    height: "67%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
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
  form: {
    flex: 0,
    width: "100%",
  },
  input: {
    // marginHorizontal: 16,
    padding: 16,
    // backgroundColor: "#F6F6F6",
    borderWidth: 1,
    // borderColor: "#E8E8E8",
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
  pageTitle: {
    alignSelf: "center",
    marginTop: 92,
    marginBottom: 33,
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
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
  linkText: {
    marginTop: 16,
    marginBottom: 66,
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto-Regular",
  },
});
