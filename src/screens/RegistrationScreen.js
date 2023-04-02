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
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const RegistrationScreen = () => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../images/bg.jpg")}
        >
          <View style={styles.contentThumb}>
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
              <View style={styles.form}>
                <Text style={styles.pageTitle}>Регистрация</Text>
                <TextInput style={styles.input} placeholder="Логин" />
                <TextInput
                  style={styles.input}
                  placeholder="Адрес электронной почты"
                />
                <TextInput style={styles.input} placeholder="Пароль" />
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.text}>Зарегистрироваться</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.linkText}>Уже есть аккаунт? Войти</Text>
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
    marginHorizontal: 16,
    padding: 16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 16,
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
    marginTop: 27,
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
    color: "#1b4371",
  },
});
