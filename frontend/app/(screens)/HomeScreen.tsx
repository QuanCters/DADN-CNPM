import MicroCard from "@/components/MicroCard";
import ScheduleCard from "@/components/ScheduleCard";
import Title from "@/components/Title";
import WelcomeCard from "@/components/WelcomeCard";
import React, { useEffect } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";

import FCMService from "@/services/fcm.service";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Home from "@/interface/home.interface";
import Device from "@/interface/device.interface";
import { router } from "expo-router";
import QuickAccessCard from "@/components/QuickAccessCard";

const HomeScreen = () => {
  const userId = useSelector((state: any) => state.user.user_id);
  useEffect(() => {
    const initializeFCM = async () => {
      if (userId) {
        await FCMService.init(userId);
      }
    };
    initializeFCM();
    return () => {};
  }, [userId]);
  const homeId = useSelector((state: RootState) => state.user.selectedHome);
  const devices = useSelector((state: RootState) => {
    const home = state.user.homes.find((home: Home) => home.home_id === homeId);
    if (!home) return null;
    const devices = home.devices.filter((device: Device) =>
      ["fan", "light"].includes(device.type)
    );
    return devices.length > 2 ? devices.slice(0, 2) : devices;
  });

  const getDevicePathname = (deviceType: string) => {
    switch (deviceType) {
      case "fan":
        return "/(deviceconfig)/Fan";
      case "light":
        return "/(deviceconfig)/Light";
      default:
        console.warn(`Invalid device type: ${deviceType}`);
        return null;
    }
  };
  return (
    <View style={styles.container}>
      <WelcomeCard onScreen="home" />
      <View style={styles.scheduleContainer}>
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
      </View>
      {/* <View style={styles.microCardContainer}>
        <MicroCard />
      </View> */}
      <View style={styles.QuickAccessCardContainer}>
        <Title ownStyle={styles.QuickAccessTitle}>Quick access</Title>
        <FlatList
          style={styles.flatList}
          data={devices}
          renderItem={({ item }) => {
            const pathname = getDevicePathname(item.type);
            console.log("Item: ", item);
            console.log("Pathname: ", pathname);
            if (!pathname) return null;
            return (
              <QuickAccessCard
                id={item.id}
                deviceType={item.type}
                roomName={item.room_name}
                havingSwitch={["light", "fan"].includes(item.type)}
                onPress={() =>
                  router.push({
                    pathname: pathname,
                    params: { id: item.id },
                  })
                }
              />
            );
          }}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "center", gap: 10 }}
          contentContainerStyle={{
            gap: 10,
          }}
          showsVerticalScrollIndicator={false}
        />
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
    marginTop: 90,
    width: "100%",
    height: "100%",
  },
  QuickAcessCards: {
    // flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
    // width: "100%",
    // gap: 20,
    // marginTop: 12,

    flex: 1,
  },
  QuickAccessTitle: {
    paddingHorizontal: 26,
    color: "#424242",
    textAlign: "left",
    fontSize: 20,
  },
  flatList: {
    flex: 1,
    gap: 10,
    width: "100%",
    position: "absolute",
    top: "5%",
    left: 0,
    right: 0,
    bottom: 0,
  },
});
