import Title from "@/components/Title";
import { Colors } from "@/constants/Colors";
import React from "react";
import { Image, View, StyleSheet, ImageBackground, Text } from "react-native";

// 16:9 aspect ratio

type RoomCardProps = {
  roomName: "Kitchen" | "Living Room" | "Bed Room";
  deviceCount: number;
};

const RoomCard = (props: RoomCardProps) => {
  let imgSrc;

  if (props.roomName === "Kitchen") {
    imgSrc = require("@/assets/images/kitchen.png");
  } else if (props.roomName === "Living Room") {
    imgSrc = require("@/assets/images/livingroom.png");
  } else {
    imgSrc = require("@/assets/images/bedroom.png");
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={imgSrc}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Title ownStyle={{ color: Colors.backgroundColor }}>
            {props.roomName}
          </Title>
          <Text style={styles.text}>
            {props.deviceCount > 1
              ? `${props.deviceCount} devices`
              : `${props.deviceCount} device`}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default RoomCard;
const styles = StyleSheet.create({
  container: {
    height: 200,
    borderWidth: 1,
    borderTopEndRadius: 40,
    borderBottomStartRadius: 40,
    overflow: "hidden", // ✅ Ensures the image respects the borderRadius
  },
  imageBackground: {
    flex: 1,
    width: "100%",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Optional: Dark overlay for better readability
    padding: 20,
    paddingTop: 115,
  },
  text: {
    color: Colors.backgroundColor,
  },
});
