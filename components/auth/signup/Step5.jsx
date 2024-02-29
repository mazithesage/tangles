import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const genders = [
  { id: "male", label: "Male", icon: "male" },
  { id: "female", label: "Female", icon: "female" },
  { id: "other", label: "Other", icon: "genderless" },
];

const Step5 = ({ gender, setGender, nextStep, prevStep, step }) => {
  // Calculate progress
  const totalSteps = 7; // Total number of steps
  const progress = (step / totalSteps) * 100;

  return (
    <View style={styles.container}>
      {/* Image related to inputs */}
      <Image
        source={require("../../../assets/images/register/05.png")} // Replace with your image URL or local image path
        style={styles.inputImage}
      />
      <View style={styles.titleCon}>
        <Text style={styles.title}>What is your gender?</Text>
      </View>
      <View style={styles.genderContainer}>
        {genders.map((gen) => (
          <TouchableOpacity
            key={gen.id}
            style={[
              styles.genderButton,
              gender === gen.id ? styles.genderButtonSelected : null,
            ]}
            onPress={() => setGender(gen.id)}
          >
            <FontAwesome
              name={gen.icon}
              size={24}
              color={gender === gen.id ? "#FFF" : "gray"}
            />
            <Text
              style={[
                styles.genderLabel,
                gender === gen.id ? styles.genderLabelSelected : null,
              ]}
            >
              {gen.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
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
          <AntDesign name="arrowleft" size={20} color="#FF355E" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton} onPress={nextStep}>
          <AntDesign name="arrowright" size={20} color="#FF355E" />
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
  titleCon: {
    marginTop: 50,
  },
  stepIndicators: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  stepIndicator: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#FF355E",
    borderWidth: 2,
    marginRight: 10,
  },
  filledStepIndicator: {
    backgroundColor: "#FF355E",
  },
  stepText: {
    color: "#FF355E",
    fontSize: 16,
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#FF355E",
    height: 40,
  },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  genderButton: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
    borderWidth: 2,
    height: 50,
    width: 100,
    borderColor: "gray",
    borderRadius: 20,
  },
  genderButtonSelected: {
    backgroundColor: "#FF355E",
    borderColor: "#FF355E",
  },
  genderLabel: {
    marginTop: 5,
    fontSize: 16,
    color: "gray",
  },
  genderLabelSelected: {
    color: "white",
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

  bottomContainer: {
    width: "100%",
    height: 100,
    alignItems: "center",
    marginTop: 20,
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
  inputImage: {
    width: 250, // Set appropriate width
    height: 250, // Set appropriate height
    marginBottom: 20, // Adjust as needed
  },
  btnCon: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

export default Step5;
