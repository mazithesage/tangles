import { View, Text, Alert, StyleSheet } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import Step1 from "./signup/Step1";
import Step2 from "./signup/Step2";
import Step3 from "./signup/Step3";
import Step4 from "./signup/Step4";
import Step5 from "./signup/Step5";
import Step6 from "./signup/Step6";
import Step7 from "./signup/Step7";
import Step8 from "./signup/Step8";
import Step9 from "./signup/Step9";
import CompletionStep from "./signup/CompletionStep";
import { auth, db, storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import * as FileSystem from "expo-file-system";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

export default function Register() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    displayName: "",
    name: "",
    email: "",
    age: "",
    gender: "",
    interests: [],
    bio: "",
    password: "",
    confirmPassword: "",
    images: [],
  });
  const nextStep = () => {
    // Validate the current step before proceeding
    setStep(step + 1);
  };

  // console.log(formData.images[0], "img");
  const handleSubmit = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;
      console.log(user.uid);
      const userData = {
        // userId: user.uid,
        email: formData.email,
        displayName: formData.displayName,
        name: formData.name,
        age: formData.age,
        gender: formData.gender,
        bio: formData.bio,
        interests: formData.interests,
      };

      if (formData.images[0]) {
        const { uri } = await FileSystem.getInfoAsync(formData.images[0]);
        const blob = await new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.onload = function () {
            resolve(xhr.response);
          };
          xhr.onerror = function (e) {
            console.log(e);
            reject(new TypeError("Network request failed"));
          };
          xhr.responseType = "blob";
          xhr.open("GET", uri, true);
          xhr.send(null);
        });
        const filename = formData.images[0].substring(
          formData.images[0].lastIndexOf("/") + 1
        );
        const storageRef = ref(storage, `images/${user.uid}/${filename}`);
        // const storageRef = ref(storage, filename);
        const uploadTask = await uploadBytesResumable(storageRef, blob);
        const url = await getDownloadURL(storageRef);
        console.log(url, "url");
        userData.images = url;
        // const userCol = await addDoc(collection(db, "users"), userData);
        await setDoc(doc(db, "users", user.uid), userData);
      }
    } catch (error) {
      console.error("Error creating user:", error);
      setError({
        error: error.message,
      });
    }
  };

  console.log(error, "error");

  const prevStep = () => {
    setStep(step - 1);
  };
  return (
    <View style={styles.container}>
      {step === 1 ? (
        <Step1
          displayName={formData.displayName}
          setDisplayName={(displayName) =>
            setFormData({ ...formData, displayName })
          }
          nextStep={nextStep}
          step={step}
        />
      ) : step === 2 ? (
        <Step2
          name={formData.name}
          setName={(name) => setFormData({ ...formData, name })}
          nextStep={nextStep}
          prevStep={prevStep}
          step={step}
        />
      ) : step === 3 ? (
        <Step3
          email={formData.email}
          setEmail={(email) => setFormData({ ...formData, email })}
          nextStep={nextStep}
          prevStep={prevStep}
          step={step}
        />
      ) : step === 4 ? (
        <Step4
          age={formData.age}
          setAge={(age) => setFormData({ ...formData, age })}
          nextStep={nextStep}
          prevStep={prevStep}
          step={step}
        />
      ) : step === 5 ? (
        <Step5
          gender={formData.gender}
          setGender={(gender) => setFormData({ ...formData, gender })}
          nextStep={nextStep}
          prevStep={prevStep}
          step={step}
        />
      ) : step === 6 ? (
        <Step6
          interests={formData.interests}
          setInterests={(interests) => setFormData({ ...formData, interests })}
          nextStep={nextStep}
          prevStep={prevStep}
          step={step}
        />
      ) : step === 7 ? (
        <Step7
          bio={formData.bio}
          setBio={(bio) => setFormData({ ...formData, bio })}
          nextStep={nextStep}
          prevStep={prevStep}
          step={step}
        />
      ) : step === 8 ? (
        <Step8
          images={formData.images}
          setImages={(images) => setFormData({ ...formData, images })}
          nextStep={nextStep}
          prevStep={prevStep}
          step={step}
        />
      ) : step === 9 ? (
        <Step9
          password={formData.password}
          setPassword={(password) => setFormData({ ...formData, password })}
          confirmPassword={formData.confirmPassword}
          setConfirmPassword={(confirmPassword) =>
            setFormData({ ...formData, confirmPassword })
          }
          nextStep={nextStep}
          prevStep={prevStep}
          handleSubmit={handleSubmit}
          step={step}
        />
      ) : step === 10 ? (
        <CompletionStep />
      ) : null}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
