import { Tabs } from "expo-router";
import React from "react";
import { Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#ffffff",
          height: 60,
          paddingBottom: 10,
        },
      }}
    >
      <Tabs.Screen
        name="HomeScreen"
        options={{
          title: "Home",
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? "blue" : "gray",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              Home
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Ionicons name="home" size={24} color={focused ? "blue" : "gray"} />
          ),
        }}
      />
      <Tabs.Screen
        name="ControlScreen"
        options={{
          title: "Control",
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? "blue" : "gray",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              Control
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="settings"
              size={24}
              color={focused ? "blue" : "gray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="SmartDoorScreen"
        options={{
          title: "Smart Door",
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? "blue" : "gray",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              Smart Door
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Ionicons name="key" size={24} color={focused ? "blue" : "gray"} />
          ),
        }}
      />
    </Tabs>
  );
}
