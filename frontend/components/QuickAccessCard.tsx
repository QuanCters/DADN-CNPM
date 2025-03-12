import React, { useState } from "react";

import { Image, StyleSheet, Switch, Text, View } from "react-native";
import { Colors } from "@/constants/Colors";

const QuickAccessCard = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        style={styles.imgStyle}
        source={require("@/assets/images/image-fan.png")}
      />
      <Text style={styles.titleText}>Fan</Text>
      <Text>Kitchen</Text>
      <Switch
        trackColor={{ false: "#D1D1D6", true: Colors.primary800 }}
        thumbColor={isEnabled ? "#FFFFFF" : "#F2F2F7"}
        ios_backgroundColor="#D1D1D6"
        onValueChange={() => setIsEnabled(!isEnabled)}
        value={isEnabled}
        style={styles.switch}
      />
    </View>
  );
};

export default QuickAccessCard;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "47%",
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
