import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from "../../firebase";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

const Login = ({ navigation }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    error: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  async function signInWithEmail() {
    setIsLoading(true);
    if (formData.email === "" || formData.password === "") {
      setFormData({
        ...formData,
        error: "Email and password are mandatory.",
      });
      return;
    }

    setFormData({
      ...formData,
      error: "",
    });
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      navigation.replace("BottomTab");
    } catch (error) {
      setFormData({
        ...formData,
        error: error.message,
      });
    }
    setIsLoading(false);
    // setLoading(false);
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user is signed in", user);
      } else {
        console.log("user is not signed  in");
        // navigation.replace("Onboarding");
      }
    });
  }, []);

  if (isLoading) {
    return <ActivityIndicator size="small" color="#FF355E" />;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <View style={styles.mid} />
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setFormData({ ...formData, email: text })}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setFormData({ ...formData, password: text })}
        />
      </View>
      <TouchableOpacity
        onPress={() => signInWithEmail()}
        color="#f62459"
        style={styles.button}
      >
        {/* <Icon name="mail" size={24} color="#fff" style={styles.icon} /> */}
        <Text style={styles.text}>Login with Email</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#FF355E",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: "100%",
  },
  inputContainer: {
    width: "100%",
    // alignItems: "center",
    justifyContent: "center",
  },
  mid: {
    marginVertical: "25%",
  },
  button: {
    width: "100%", // Full-width
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "#FF355E", // Primary color
    marginTop: "50%",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
  inputText: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: "bold",
    color: "#FF355E",
  },
});

export default Login;
