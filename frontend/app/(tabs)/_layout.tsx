import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";

import { Colors } from "@/constants/Colors";

import HomeScreen from "@/app/ui/screens/HomeScreen";
import SmartDoor from "@/app/ui/screens/SmartDoor";
import ControlScreen from "@/app/ui/screens/ControlScreen";
import Dialog from "@/app/ui/components/Dialog";

const HOME_ACCESS_CODE = "ABC123";

export default function TabLayout() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [isAccess, setIsAccess] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Dialog
        setIsAccess={setIsAccess}
        modalVisible={modalVisible}
        onModalVisibleChange={setModalVisible}
        homeAccessCode={HOME_ACCESS_CODE}
      />
      {/* <HomeScreen /> */}
      {/* <SmartDoor /> */}
      <ControlScreen
        onAddPinClick={() => setModalVisible(true)}
        isAccess={isAccess}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
});
