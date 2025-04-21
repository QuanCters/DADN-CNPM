import MicroCard from "@/components/MicroCard";
import ScheduleCard from "@/components/ScheduleCard";
import Title from "@/components/Title";
import WelcomeCard from "@/components/WelcomeCard";
import React, { useEffect, useMemo, useState } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";

import FCMService from "@/services/fcm.service";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Home from "@/interface/home.interface";
import Device from "@/interface/device.interface";
import { router } from "expo-router";
import QuickAccessCard from "@/components/QuickAccessCard";
import ScheduleType from "@/interface/schedule.interface";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

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

  const [clicked, setClicked] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const homeId = useSelector((state: RootState) => state.user.selectedHome);
  const currentHome = useSelector((state: RootState) =>
    state.user.homes.find((home: Home) => home.home_id === homeId)
  );

  const devices = useMemo(() => {
    if (!currentHome) return null;
    const filteredDevices = currentHome.devices.filter((device: Device) =>
      ["fan", "light"].includes(device.type)
    );
    return filteredDevices.length > 2
      ? filteredDevices.slice(0, 2)
      : filteredDevices;
  }, [currentHome]);

  const [schedule, setSchedule] = useState<ScheduleType[] | null>(null);

  useFocusEffect(
    useCallback(() => {
      async function fetchSchedule() {
        try {
          if (!devices) return;
          const accumulatedSchedule: ScheduleType[] = [];

          for (const device of devices) {
            const deviceId = device.id;

            const response = await fetch(
              process.env.EXPO_PUBLIC_BACKEND_URL +
                "/schedule/device/" +
                deviceId
            );
            if (!response.ok) {
              throw new Error("Failed to fetch schedule of device " + deviceId);
            }
            const data = await response.json();
            const now = new Date();
            const currWeekday = [
              "sunday",
              "monday",
              "tuesday",
              "wednesday",
              "thursday",
              "friday",
              "saturday",
            ][now.getDay()];

            const scheduleOnCurrDate: any[] = data.metadata.filter(
              (schedule: ScheduleType) =>
                schedule.action_days.includes(currWeekday)
            );

            scheduleOnCurrDate.forEach((schedule: ScheduleType) => {
              schedule.device_id = deviceId;
              // @ts-ignore
              schedule.room_name = device.room_name;
              // @ts-ignore
              schedule.device_type = device.type;
            });

            const sortedSchedules = scheduleOnCurrDate
              .filter((item: ScheduleType) => new Date(item.action_time) >= now)
              .sort(
                (a, b) =>
                  new Date(a.action_time).getTime() -
                  new Date(b.action_time).getTime()
              );

            accumulatedSchedule.push(...sortedSchedules);
          }
          console.log("NEW Accumulated schedule: ", accumulatedSchedule);
          setSchedule(accumulatedSchedule);
        } catch (error) {
          console.error("Error fetching schedule: ", error);
        }
      }

      fetchSchedule();

      return () => {
        if (intervalId) {
          clearInterval(intervalId);
        }
      };
    }, [homeId, devices, intervalId])
  );

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
        {schedule && schedule.length > 0 ? (
          <>
            {schedule.slice(0, 3).map((item, index) => {
              console.log("schedule ", schedule);
              console.log("Item: ", item, item.is_enable);
              return (
                <ScheduleCard
                  key={item.action_time}
                  deviceId={item.device_id}
                  deviceType={item.device_type}
                  roomName={item.room_name}
                  actionTime={item.action_time}
                  action={item.action}
                  isEnable={item.is_enable}
                  actionDays={item.action_days}
                  onPress={() => {
                    router.push({
                      pathname: "/(subscreen)/ScheduleScreen",
                      params: { deviceId: item.device_id },
                    });
                  }}
                />
              );
            })}
          </>
        ) : (
          <Text style={{ fontSize: 16, color: "#424242" }}>
            No schedules available
          </Text>
        )}
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
    justifyContent: "center", // Even spacing between cards
    gap: 10,
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
