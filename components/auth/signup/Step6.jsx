import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

const listInterests = [
  { id: 1, label: "Traveling", icon: "plane" },
  { id: 2, label: "Movies", icon: "film" },
  { id: 3, label: "Music", icon: "music" },
  { id: 4, label: "Foodie", icon: "spoon" },
  { id: 5, label: "Outdoor Activities", icon: "space-shuttle" },
  { id: 6, label: "Sports", icon: "soccer-ball-o" },
  { id: 7, label: "Cooking", icon: "cutlery" },
  { id: 8, label: "Reading", icon: "book" },
  { id: 9, label: "Art & Culture", icon: "paint-brush" },
  { id: 10, label: "Gaming", icon: "gamepad" },
  { id: 11, label: "Fitness", icon: "heartbeat" },
  { id: 12, label: "Dancing", icon: "music" },
  // Add more interests as necessary...
];

const Step6 = ({ interests, setInterests, nextStep, prevStep, step }) => {
  const handleInterestToggle = (interestId) => {
    // Check if the interest is already selected
    if (interests.includes(interestId)) {
      // If it's selected, remove it from the selected interests
      setInterests(interests.filter((id) => id !== interestId));
    } else {
      // If it's not selected, add it to the selected interests
      setInterests([...interests, interestId]);
    }
  };

  // Calculate progress
  const totalSteps = 7; // Total number of steps
  const progress = (step / totalSteps) * 100;

  return (
    <View style={styles.container}>
      {/* Image related to inputs */}
      <Image
        source={require("../../../assets/images/register/06.png")} // Replace with your image URL or local image path
        style={styles.inputImage}
      />

      <Text style={styles.title}>Select You Interests</Text>
      <View style={styles.interestsContainer}>
        {listInterests.map((interest) => (
          <TouchableOpacity
            key={interest.id}
            style={[
              styles.interestButton,
              interests.includes(interest.id) && styles.interestButtonSelected,
            ]}
            onPress={() => handleInterestToggle(interest.id)}
          >
            {interests.includes(interest.id) ? (
              <FontAwesome name={interest.icon} size={14} color="#fff" /> // Change color for selected interest
            ) : (
              <FontAwesome name={interest.icon} size={14} color="#000" /> // Default color for unselected interest
            )}

            <Text
              style={[
                styles.interestLabel,
                interests.includes(interest.id) && styles.interestLabelSelected,
              ]}
            >
              {interest.label}
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
  inputImage: {
    width: 250, // Set appropriate width
    height: 250, // Set appropriate height
    marginBottom: 20, // Adjust as needed
  },
  interestsContainer: {
    flexDirection: "row",
    flexWrap: "wrap", // this is the key prop here
    alignItems: "center",
    justifyContent: "flex-start",
    height: 100,
    width: "100%",
    marginBottom: 100,
  },
  interestButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ececec",
    borderColor: "#FF355E",
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    margin: 2,
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
  interestButtonSelected: {
    backgroundColor: "#FF355E",
  },
  interestLabel: {
    marginLeft: 5,
    color: "#000",
    fontWeight: "bold",
  },
  interestLabelSelected: {
    color: "#FFF",
  },

  bottomContainer: {
    width: "100%",
    height: 100,
    alignItems: "center",
    marginTop: 20,
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

export default Step6;
