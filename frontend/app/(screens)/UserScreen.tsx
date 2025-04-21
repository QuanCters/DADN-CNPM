import Header from "@/components/Header";
import NotificationBoard from "@/components/NotificationBoard";
import WelcomeCard from "@/components/WelcomeCard";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Consumption from "@/components/Consumption";
import LogoutBtn from "@/components/LogoutBtn";
import AddUserDialog from "@/components/AddUserDialog";

const UserScreen = () => {
  const [isAccess, setIsAccess] = useState(false);
  const [isOpenPrompt, setIsOpenPrompt] = useState(false);
  return (
    <View style={styles.container}>
      <AddUserDialog
        modalVisible={isOpenPrompt}
        setIsAccess={setIsAccess}
        onModalVisibleChange={setIsOpenPrompt}
      />
      <WelcomeCard onScreen="user" setIsOpenPrompt={setIsOpenPrompt} />
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
