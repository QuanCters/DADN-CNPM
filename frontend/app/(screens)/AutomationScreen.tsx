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
        numColumns={2} // Chia thành 2 cột, có thể điều chỉnh theo thiết kế
        columnWrapperStyle={{ justifyContent: "center", gap: 15 }} // Căn chỉnh giữa các item
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default AutomationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  scheduleContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center", // Even spacing between cards
    gap: 20,
    width: "100%",
    paddingHorizontal: 26,
    position: "absolute",
    flexWrap: "wrap",
    top: "20%", // Moves the schedule cards up like in the image
  },
  flatList: {
    flex: 1,
    gap: 10,
    width: "100%",
    position: "absolute",
    top: "23%", // Điều chỉnh vị trí top để tránh trùng header
    left: 0,
    right: 0,
    bottom: 0, // Cho phép full màn hình
  },
});
