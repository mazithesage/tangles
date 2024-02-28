import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Step2 = ({ name, setName, nextStep, prevStep, step }) => {
  const [error, setError] = useState("");

  const handleNextStep = () => {
    if (!name) {
      setError("Please enter your full name");
    } else {
      setError("");
      nextStep(); // Proceed to the next step only if no errors
    }
  };

  // Calculate progress
  const totalSteps = 7; // Total number of steps
  const progress = (step / totalSteps) * 100;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What is your full name?</Text>

      {/* Image related to inputs */}
      <Image
        source={require("../../../assets/images/register/02.png")} // Replace with your image URL or local image path
        style={styles.inputImage}
      />

      <View style={styles.inputContainer}>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Enter your Full Name"
          style={styles.input}
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>

      {/* Back Button */}

      <View style={styles.bottomContainer}>
        <Text style={styles.stepText}>
          Step {step} of {totalSteps}
        </Text>
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: `${progress}%` }]} />
        </View>
      </View>
      <View style={styles.btnCon}>
        <TouchableOpacity style={styles.backButton} onPress={prevStep}>
          <AntDesign name="arrowleft" size={24} color={"#FF355E"} />
        </TouchableOpacity>

        {/* Next Button */}
        <TouchableOpacity style={styles.nextButton} onPress={handleNextStep}>
          <AntDesign name="arrowright" size={24} color={"#FF355E"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
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
  backButton: {
    height: 50,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  nextButton: {
    height: 50,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  btnCon: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

export default Step2;
