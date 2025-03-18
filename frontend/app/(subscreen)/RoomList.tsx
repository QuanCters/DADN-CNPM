import Header from "@/components/Header";
import RoomCard from "@/components/RoomCard";
import roomTypes from "@/constants/roomType";
import React from "react";
import { StyleSheet, View } from "react-native";
import { router } from "expo-router";

const RoomList = () => {
  return (
    <View style={styles.container}>
      <Header>Room List</Header>
      <View style={styles.roomContainer}>
        <RoomCard
          roomName={roomTypes.kitchen}
          deviceCount={1}
          onPress={() => router.push("/DeviceList")}
        />
        <RoomCard
          roomName={roomTypes.livingRoom}
          deviceCount={2}
          onPress={() => router.push("/DeviceList")}
        />
        <RoomCard
          roomName={roomTypes.bedroom}
          deviceCount={3}
          onPress={() => router.push("/DeviceList")}
        />
      </View>
    </View>
  );
};

export default RoomList;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  roomContainer: {
    flex: 1,
    width: "90%",
    gap: 20,
    marginTop: 16,
    elevation: 10,
  },
});
