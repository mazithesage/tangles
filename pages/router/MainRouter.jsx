import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import OnboardingScreen from "../Onboarding";
import RegistrationScreen from "../auth/RegistrationScreen";
import LoginScreen from "../auth/LoginScreen";
import HomeScreen from "../home/HomeScreen";
import SignInWithPhone from "../auth/SignInWithPhone";
import BottomTab from "./BottomTab";

export default function MainRouter() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Registration" component={RegistrationScreen} />
      <Stack.Screen name="Phone" component={SignInWithPhone} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
