import QuickAccessCard from "@/components/QuickAccessCard";
import WelcomeCard from "@/components/WelcomeCard";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import deviceTypes from "@/constants/deviceType";
import roomTypes from "@/constants/roomType";

const devices = [
  {
    deviceName: deviceTypes.airConditioner,
    roomName: roomTypes.livingRoom,
  },
  {
    deviceName: deviceTypes.fan,
    roomName: roomTypes.bedroom,
  },
  {
    deviceName: deviceTypes.fan,
    roomName: roomTypes.bedroom,
  },
  {
    deviceName: deviceTypes.fan,
    roomName: roomTypes.bedroom,
  },
  {
    deviceName: deviceTypes.fan,
    roomName: roomTypes.bedroom,
  },
  {
    deviceName: deviceTypes.fan,
    roomName: roomTypes.bedroom,
  },
  {
    deviceName: deviceTypes.fan,
    roomName: roomTypes.bedroom,
  },
  {
    deviceName: deviceTypes.fan,
    roomName: roomTypes.bedroom,
  },
  {
    deviceName: deviceTypes.fan,
    roomName: roomTypes.bedroom,
  },
];

const AutomationScreen = () => {
  return (
    <View style={styles.container}>
      <WelcomeCard onScreen="automation" />
      <FlatList
        style={styles.flatList}
        data={devices}
        renderItem={({ item }) => (
          <QuickAccessCard
            deviceName={item.deviceName}
            roomName={item.roomName}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "center", gap: 10 }}
        contentContainerStyle={{
          justifyContent: "center",
          gap: 10,
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default AutomationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  scheduleContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    width: "100%",
    paddingHorizontal: 26,
    position: "absolute",
    flexWrap: "wrap",
    top: "20%",
  },
  flatList: {
    flex: 1,
    gap: 10,
    width: "100%",
    position: "absolute",
    top: "23%",
    left: 0,
    right: 0,
    bottom: 0,
  },
});
