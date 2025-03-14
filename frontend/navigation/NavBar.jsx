import React from "react";

import { View } from "react-native";
import HomeScreen from "../app/(login)/HomeScreen";
import SmartDoorScreen from "../app/(screens)/SmartDoorScreen";
import ControlScreen from "../app/(login)/ControlScreen";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const NavBar = () => {
  return (
    <Tab.Navigator
    //   screenOptions={({ route }) => ({
    //     //   tabBarIcon: ({ color, size }) => {
    //     //     let iconName;
    //     //     if (route.name === "Home") {
    //     //       iconName = "home";
    //     //     } else if (route.name === "Smart Door") {
    //     //       iconName = "key";
    //     //     } else if (route.name === "Control") {
    //     //       iconName = "settings";
    //     //     }
    //     //     return <Ionicons name={iconName} size={size} color={color} />;
    //     //   },
    //     tabBarActiveTintColor: "#007AFF",
    //     tabBarInactiveTintColor: "gray",
    //   })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Smart Door" component={SmartDoorScreen} />
      <Tab.Screen name="Control" component={ControlScreen} />
    </Tab.Navigator>
  );
};

export default NavBar;
