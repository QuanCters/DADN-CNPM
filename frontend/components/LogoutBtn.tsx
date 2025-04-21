import React from "react";
import { Pressable, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { logout } from "@/redux/slices/userSlice";
import { router } from "expo-router";

const LogoutBtn = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <View style={{ paddingBottom: 10, alignItems: "center" }}>
      <Pressable
        onPress={() => {
          // Handle logout logic here
          dispatch(logout());
          // navigate to login screen or perform any other action
          router.push(`/`);
        }}
        style={{
          backgroundColor: "#9ACBD0",
          padding: 10,
          paddingHorizontal: 20,
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "#F1EFEC", fontSize: 16 }}>Logout</Text>
      </Pressable>
    </View>
  );
};

export default LogoutBtn;
