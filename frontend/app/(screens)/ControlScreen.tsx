import Dialog from "@/components/Dialog";
import PrimaryBtn from "@/components/PrimaryBtn";
import React, { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import Title from "@/components/Title";
import Home from "@/interface/home.interface";
import Entypo from "@expo/vector-icons/Entypo";

import { router } from "expo-router";

const ACCESS_CODE = "1234";
const HOME_LIST: Home[] = [
  {
    home_id: 1,
    home_name: "Home 1",
    serial_number: "1234 Home Street",
    aio_key: "1234",
    manager_id: 1,
    devices: [],
  },
  {
    home_id: 2,
    home_name: "Home 2",
    serial_number: "1234 Home Street",
    aio_key: "1234",
    manager_id: 1,
    devices: [],
  },
];

const ControlScreen = () => {
  const [isAccess, setIsAccess] = useState(false);
  const [isOpenPrompt, setIsOpenPrompt] = useState(false);

  return (
    <View style={styles.container}>
      <Dialog
        homeAccessCode={ACCESS_CODE}
        modalVisible={isOpenPrompt}
        setIsAccess={setIsAccess}
        onModalVisibleChange={setIsOpenPrompt}
      />

      <Title ownStyle={styles.title}>Control Device</Title>
      <FlatList
        data={HOME_LIST}
        showsVerticalScrollIndicator={false}
        style={styles.homesContainer}
        contentContainerStyle={{
          gap: 13,
        }}
        renderItem={({ item }) => {
          return (
            <Pressable
              style={styles.homeCard}
              onPress={() => router.push("/RoomList")}
            >
              <View>
                <Text style={styles.homeCardTitle}>{item.home_name}</Text>
                <Text style={styles.homeCardText}>{item.serial_number}</Text>
              </View>
              <Text style={styles.homeCardText}>
                {item.devices.length} rooms
              </Text>

              <View style={styles.iconWrapper}>
                <Entypo
                  name="dots-three-horizontal"
                  size={12}
                  color="#F5ECE0"
                />
              </View>
            </Pressable>
          );
        }}
      />
      <View style={styles.btnContainer}>
        <PrimaryBtn onPress={() => setIsOpenPrompt(true)}>
          Add Home Access Pin
        </PrimaryBtn>
      </View>
    </View>
  );
};

export default ControlScreen;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  title: {
    paddingTop: 40,
  },
  homesContainer: {
    paddingHorizontal: 26,
    marginTop: 20,
    width: "100%",
  },
  homeCard: {
    width: "100%",
    height: 100,
    backgroundColor: "#5F99AE",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  homeCardTitle: {
    width: "100%",
    color: "#F5ECE0",
    fontSize: 22,
    fontWeight: "bold",
  },
  homeCardText: {
    color: "#F5ECE0",
    fontSize: 14,
  },
  iconWrapper: {
    borderRadius: 50,
    padding: 4,
    borderColor: "#F5ECE0",
    borderWidth: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  btnContainer: {
    margin: 30,
  },
});
