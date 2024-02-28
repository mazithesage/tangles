import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Header from "../../home/Header";
import HomeScreen from "../../home/HomeScreen";
import OnboardingScreen from "../../Onboarding";
import AddUserData from "../../home/AddUserData";
import UserData from "../../../components/auth/UserData";

export default function HomeStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Header" component={Header} />
      <Stack.Screen name="onBoarding" component={OnboardingScreen} />
      <Stack.Screen name="add-user-data" component={UserData} />
    </Stack.Navigator>
  );
}
