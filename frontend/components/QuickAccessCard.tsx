import React, { useState } from "react";

import { Image, Pressable, StyleSheet, Switch, Text, View } from "react-native";
import { Colors } from "@/constants/Colors";
import { deviceTypes, DeviceType } from "@/constants/deviceType";

type QuickAccessCardProps = {
  havingSwitch?: boolean;
  deviceType: DeviceType;
  roomName: string;
  onPress: () => void;
};

const DEVICE_IMAGES: Record<DeviceType, any> = {
  fan: require("@/assets/images/devices/image-fan.png"),
  light: require("@/assets/images/devices/image-light.png"),
  airConditioner: require("@/assets/images/devices/image-air-conditioner.png"),
};

const QuickAccessCard = ({
  havingSwitch = true,
  deviceType,
  roomName,
  onPress,
}: QuickAccessCardProps) => {
  // const [isEnabled, setIsEnabled] = useState(false);
  const deviceName = deviceTypes[deviceType];

  return (
    <Pressable
      style={styles.container}
      onPress={onPress}
      accessibilityRole="button"
    >
      <Image
        style={styles.imgStyle}
        source={DEVICE_IMAGES[deviceType]}
        accessibilityLabel={`${deviceName} icon`}
      />
      <Text style={styles.titleText}>{deviceName}</Text>
      <Text style={styles.roomText}>{roomName}</Text>
      {/* {havingSwitch && (
        <Switch
          trackColor={{ false: "#D1D1D6", true: Colors.primary800 }}
          thumbColor={isEnabled ? "#FFFFFF" : "#F2F2F7"}
          ios_backgroundColor="#D1D1D6"
          onValueChange={() => setIsEnabled(!isEnabled)}
          value={isEnabled}
          style={styles.switch}
        />
      )} */}
    </Pressable>
  );
};

export default QuickAccessCard;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "45%",
    height: 200,
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
    marginBottom: 12,
  },
  switch: {
    transform: [{ scale: 1.2 }], // Makes the switch bigger
  },
});
