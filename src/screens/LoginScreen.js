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
import Icon from "react-native-vector-icons/AntDesign";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../images/bg.jpg")}
      >
        <View style={styles.formContainer}>
          <View style={styles.form}>
            <Text style={styles.page}>Войти</Text>
            <TextInput
              style={styles.input}
              placeholder="Адрес электронной почты"
            />
            <TextInput style={styles.inputPassword} />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>Войти</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.link}>Нет аккаунта? Зарегистрироваться</Text>
        </View>
      </ImageBackground>
    </View>
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
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
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
  button: {
    marginHorizontal: 16,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    marginBottom: 16,
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
    color: "#1b4371",
  },
});
