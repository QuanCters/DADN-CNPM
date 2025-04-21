import Header from "@/components/Header";
import NotificationBoard from "@/components/NotificationBoard";
import WelcomeCard from "@/components/WelcomeCard";
import React from "react";
import { View, StyleSheet } from "react-native";
import Consumption from "@/components/Consumption";
import LogoutBtn from "@/components/LogoutBtn";

const UserScreen = () => {
  return (
    <View style={styles.container}>
      <WelcomeCard onScreen="user" />
      <NotificationBoard />
      <Consumption />
      <LogoutBtn />
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
