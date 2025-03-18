import MicroCard from "@/components/MicroCard";
import QuickAccessCard from "@/components/QuickAccessCard";
import ScheduleCard from "@/components/ScheduleCard";
import Title from "@/components/Title";
import WelcomeCard from "@/components/WelcomeCard";
import React from "react";
import { View, StyleSheet } from "react-native";

import deviceTypes from "@/constants/deviceType";
import roomTypes from "@/constants/roomType";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <WelcomeCard onScreen="home" />
      <View style={styles.scheduleContainer}>
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
      </View>
      <View style={styles.microCardContainer}>
        <MicroCard />
      </View>
      <View style={styles.QuickAccessCardContainer}>
        <Title ownStyle={styles.QuickAccessTitle}>Quick access</Title>
        <View style={styles.QuickAcessCards}>
          <QuickAccessCard
            deviceName={deviceTypes.light}
            roomName={roomTypes.livingRoom}
          />
          <QuickAccessCard
            deviceName={deviceTypes.fan}
            roomName={roomTypes.bedroom}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  scheduleContainer: {
    flexDirection: "row",
    justifyContent: "space-between", // Even spacing between cards
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 26,
    position: "absolute",
    top: "20%", // Moves the schedule cards up like in the image
  },
  microCardContainer: {
    paddingTop: 90,
  },
  QuickAccessCardContainer: {
    width: "100%",
    paddingHorizontal: 26,
    marginTop: 20,
  },
  QuickAcessCards: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: 20,
    marginTop: 12,
  },
  QuickAccessTitle: {
    color: "#424242",
    textAlign: "left",
    fontSize: 20,
  },
});
