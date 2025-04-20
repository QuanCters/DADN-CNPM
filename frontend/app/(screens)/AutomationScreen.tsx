import QuickAccessCard from "@/components/QuickAccessCard";
import WelcomeCard from "@/components/WelcomeCard";
import React, { useContext, useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import roomTypes from "@/constants/roomType";
import { router } from "expo-router";
import { useSelector } from "react-redux";
import { deviceTypes } from "@/constants/deviceType";
import Device from "@/interface/device.interface";
import Home from "@/interface/home.interface";
import { RootState } from "@/redux/store";

const AutomationScreen = () => {
  const homeId = useSelector((state: RootState) => state.user.selectedHome);
  const devices = useSelector((state: RootState) => {
    const home = state.user.homes.find((home: Home) => home.home_id === homeId);
    if (!home) return null;
    const devices = home.devices.filter((device: Device) =>
      ["fan", "light"].includes(device.type)
    );
    return devices;
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
      <WelcomeCard onScreen="automation" />
      <FlatList
        style={styles.flatList}
        data={devices}
        renderItem={({ item }) => {
          const pathname = getDevicePathname(item.type);
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
