import React, { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "@/constants/Colors";
import ScheduleType from "@/interface/schedule.interface";

function handleTime(isoTime: string) {
  const date = new Date(isoTime);
  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  return date.toLocaleTimeString([], options);
}

interface ScheduleCardProps {
  deviceType: string;
  roomName: string;
  actionTime: string;
  action: string;
  isEnable: boolean;
  onPress: () => void;
  actionDays: string[];
  deviceId: number;
}

const ScheduleCard = ({
  deviceType,
  roomName,
  actionTime,
  action,
  isEnable,
  onPress,
  actionDays,
  deviceId,
}: ScheduleCardProps) => {
  console.log(handleTime(actionTime), "isEnable: ", isEnable);
  return (
    <Pressable
      style={styles.container}
      onPress={onPress}
      accessibilityRole="button"
    >
      <Text style={styles.titleText}>{deviceType.toUpperCase()}</Text>
      <Text style={styles.roomText}>{roomName}</Text>
      <Text style={styles.roomText}>{handleTime(actionTime)}</Text>
      <Text style={[styles.roomText, { paddingBottom: 12 }]}>
        Turn {action}
      </Text>

      <TouchableOpacity onPress={(e) => e.stopPropagation()} activeOpacity={1}>
        <Switch
          trackColor={{ false: "#D1D1D6", true: Colors.primary800 }}
          thumbColor={isEnable ? "#FFFFFF" : "#F2F2F7"}
          ios_backgroundColor="#D1D1D6"
          disabled={true}
          // @ts-ignore
          value={isEnable}
          style={styles.switch}
        />
      </TouchableOpacity>
    </Pressable>
  );
};

export default ScheduleCard;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
    height: 150,
    backgroundColor: "#F5F5F7",
    borderRadius: 20,
    elevation: 10, // For Android shadow
  },
  imgStyle: {
    width: 60,
    height: 60,
  },
  titleText: {
    color: Colors.primary800,
    fontSize: 20,
  },
  roomText: {
    color: Colors.neutral500,
    fontSize: 14,
    paddingBottom: 4,
  },
  switch: {
    transform: [{ scale: 1.2 }], // Makes the switch bigger
  },
});
