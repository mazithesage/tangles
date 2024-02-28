import * as React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LocationScreen from "../home/LocationScreen";
import ProfileScreen from "../home/ProfileScreen";
import ChatScreen from "../home/ChatScreen";
import HomeStack from "./stack/HomeStack";

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "HomeStack") {
            iconName = focused ? "home-circle" : "home-circle-outline";
          } else if (route.name === "LocationStack") {
            iconName = focused ? "map-marker" : "map-marker-outline";
          } else if (route.name === "ProfileStack") {
            iconName = focused
              ? "account-settings"
              : "account-settings-outline";
          } else if (route.name === "ChatStack") {
            iconName = focused ? "chat" : "chat-outline";
          }
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: "Home",
          title: "Home",
        }}
      />
      <Tab.Screen
        name="LocationStack"
        component={LocationScreen}
        options={{
          tabBarLabel: "Location",
          title: "Location",
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          title: "Profile",
        }}
      />
      <Tab.Screen
        name="ChatStack"
        component={ChatScreen}
        options={{
          tabBarLabel: "Chat",
          title: "Chat",
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTab;
