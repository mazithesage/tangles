import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

const Step1 = ({ displayName, setDisplayName, nextStep, step }) => {
  const [error, setError] = useState("");
  console.log(error);

  const handleNextStep = () => {
    let hasError = false;

    if (!displayName) {
      setError("Please enter your displayname");
      hasError = true;
    } else {
      setError("");
    }

    if (!hasError) {
      nextStep(); // Proceed to the next step only if no errors
    }
  };

  // Calculate progress
  const totalSteps = 7; // Total number of steps
  const progress = (step / totalSteps) * 100;
  return (
    <View style={styles.container}>
      {/* Image related to inputs */}
      <Image
        source={require("../../../assets/images/register/01.png")} // Replace with your image URL or local image path
        style={styles.inputImage}
      />

      <Text style={styles.title}>What is your username</Text>

      <View style={styles.inputContainer}>
        <TextInput
          value={displayName}
          onChangeText={setDisplayName}
          placeholder="Enter your User Name"
          style={styles.input}
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>

      {/* Progress Bar and Step Text at the Bottom */}

      <View style={styles.bottomContainer}>
        <Text style={styles.stepText}>
          Step {step} of {totalSteps}
        </Text>
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: `${progress}%` }]} />
        </View>
      </View>
      <TouchableOpacity style={styles.nextButton} onPress={handleNextStep}>
        <AntDesign name="arrowright" size={24} color={"#FF355E"} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#FF355E",
    height: 40,
  },
  inputContainer: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    marginBottom: 100,
  },
  input: {
    borderWidth: 1,
    borderColor: "#FF355E",
    height: 40,
    paddingLeft: 10,
    marginBottom: 10,
    width: "100%",
    color: "black",
    borderRadius: 5,
  },
  errorText: {
    color: "red",
    fontSize: 16,
    marginBottom: 10,
  },
  inputImage: {
    width: 250, // Set appropriate width
    height: 250, // Set appropriate height
    marginBottom: 20, // Adjust as needed
  },
  bottomContainer: {
    // position: "absolute",
    // bottom: 0,
    width: "100%",
    height: 100,
    alignItems: "center",
    marginTop: 20,
  },
  stepText: {
    color: "#FF355E",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  progressBarContainer: {
    height: 3,
    width: "100%",
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#FF355E",
    borderRadius: 5,
  },
  nextButton: {
    height: 50,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});

export default Step1;
