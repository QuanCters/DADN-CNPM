import React, { useState } from "react";

import { Image, Pressable, StyleSheet, Switch, Text, View } from "react-native";
import { Colors } from "@/constants/Colors";
import deviceTypes from "@/constants/deviceType";

import { router } from "expo-router";

type QuickAccessCardProps = {
  havingSwitch?: boolean;
  deviceName: string;
  roomName: string;
};

const QuickAccessCard = ({
  havingSwitch = true,
  deviceName,
  roomName,
}: QuickAccessCardProps) => {
  let image;
  let path: any;

  if (deviceName === deviceTypes.fan) {
    image = (
      <Image
        style={styles.imgStyle}
        source={require("@/assets/images/devices/image-fan.png")}
      />
    );
    path = "/(deviceconfig)/Fan";
  } else if (deviceName === deviceTypes.light) {
    image = (
      <Image
        style={styles.imgStyle}
        source={require("@/assets/images/devices/image-light.png")}
      />
    );
    path = "/(deviceconfig)/Light";
  } else if (deviceName === deviceTypes.airConditioner) {
    image = (
      <Image
        style={styles.imgStyle}
        source={require("@/assets/images/devices/image-air-conditioner.png")}
      />
    );
    path = "/(deviceconfig)/AirConditioner";
  }

  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <Pressable style={styles.container} onPress={() => router.push(path)}>
      {image}
      <Text style={styles.titleText}>{deviceName}</Text>
      <Text>{roomName}</Text>
      {havingSwitch && (
        <Switch
          trackColor={{ false: "#D1D1D6", true: Colors.primary800 }}
          thumbColor={isEnabled ? "#FFFFFF" : "#F2F2F7"}
          ios_backgroundColor="#D1D1D6"
          onValueChange={() => setIsEnabled(!isEnabled)}
          value={isEnabled}
          style={styles.switch}
        />
      )}
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
  switch: {
    transform: [{ scale: 1.2 }], // Makes the switch bigger
  },
});
