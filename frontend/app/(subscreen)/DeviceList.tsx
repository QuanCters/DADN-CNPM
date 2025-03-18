import Header from "@/components/Header";
import QuickAccessCard from "@/components/QuickAccessCard";
import deviceTypes from "@/constants/deviceType";
import roomTypes from "@/constants/roomType";
import React from "react";
import { StyleSheet, View } from "react-native";

const DeviceList = () => {
  return (
    <View style={styles.container}>
      <Header>Device List</Header>
      <View style={styles.cardContainer}>
        <QuickAccessCard
          havingSwitch={false}
          deviceName={deviceTypes.fan}
          roomName={roomTypes.kitchen}
        />
        <QuickAccessCard
          havingSwitch={false}
          deviceName={deviceTypes.airConditioner}
          roomName={roomTypes.livingRoom}
        />
        <QuickAccessCard
          havingSwitch={false}
          deviceName={deviceTypes.light}
          roomName={roomTypes.kitchen}
        />
        <QuickAccessCard
          havingSwitch={false}
          deviceName={deviceTypes.fan}
          roomName={roomTypes.bedroom}
        />
      </View>
    </View>
  );
};

export default DeviceList;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  cardContainer: {
    flex: 1,
    width: "90%",
    gap: 20,
    marginTop: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
