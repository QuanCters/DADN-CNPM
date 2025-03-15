import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Switch,
  StyleSheet,
} from "react-native";
import Slider from "@react-native-community/slider";
import { router } from "expo-router";
import { SafeAreaView } from "react-native";
import Header from "@/components/Header";
import { Colors } from "@/constants/Colors";

const Light = () => {
  const [isOn, setIsOn] = useState(true);
  const [brightness, setBrightness] = useState(47);
  const [selectedColor, setSelectedColor] = useState("#FFD700"); // Default light color

  const colors = ["#0057FF", "#FFFFE0", "#FFD700"];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#EAF1F8" }}>
      <View style={styles.container}>
        {/* Back Button */}
        <Header>Smart Light</Header>

        {/* Light Image */}

        {/* Toggle Switch */}
        <View style={styles.switchContainer}>
          <Switch value={isOn} onValueChange={() => setIsOn(!isOn)} />
        </View>

        {/* Color Selection */}
        <View style={styles.sliderContainer}>
          <View style={styles.colorContainer}>
            {colors.map((color) => (
              <TouchableOpacity
                key={color}
                style={[
                  styles.colorCircle,
                  {
                    backgroundColor: color,
                    borderWidth: selectedColor === color ? 1 : 0,
                    borderColor: "#fff",
                    transform: [{ scale: selectedColor === color ? 1.5 : 1 }],
                  },
                ]}
                onPress={() => setSelectedColor(color)}
              />
            ))}
            <TouchableOpacity style={[styles.colorCircle, styles.addColor]}>
              <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
          </View>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={100}
            value={brightness}
            onValueChange={(value) => setBrightness(value)}
            minimumTrackTintColor="#0057FF"
            maximumTrackTintColor="#ccc"
            thumbTintColor="#0057FF"
          />
        </View>

        {/* Brightness Control */}
        <View style={styles.brightnessContainer}>
          <Image
            source={require("@/assets/images/devicesConfig/lamp.png")}
            resizeMode="contain"
          />

          {isOn ? (
            <Image
              style={styles.shadowImg}
              source={require("@/assets/images/devicesConfig/ligjt.png")}
              resizeMode="contain"
            />
          ) : (
            <View style={{ height: 200 }}></View>
          )}
          <Text style={styles.brightnessText}>{Math.round(brightness)}%</Text>
          <Text style={styles.brightnessLabel}>Brightness</Text>
        </View>

        {/* Schedule Button */}
        <TouchableOpacity style={styles.scheduleButton}>
          <Text style={styles.scheduleText}>Set Schedule</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Light;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF1F8",
    alignItems: "center",
  },
  shadowImg: {
    height: 200,
    tintColor: "#fff",
  },
  switchContainer: {
    position: "absolute",
    top: 180,
    right: 30,
  },
  colorContainer: {
    flexDirection: "row",
    marginVertical: 20,
    gap: 5,
    justifyContent: "center",
  },
  colorCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 5,
  },
  addColor: {
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
  plus: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  brightnessContainer: {
    position: "absolute",
    top: -25,
    left: 30,
    alignItems: "center",
    marginVertical: 20,
  },
  brightnessText: {
    fontSize: 52,
    fontWeight: "bold",
    marginBottom: 8,
  },
  brightnessLabel: {
    fontSize: 12,
    color: "#777",
  },
  sliderContainer: {
    alignContent: "center",
    justifyContent: "center",
    padding: 20,
    position: "absolute",
    bottom: 140,
    right: -10,
  },
  slider: {
    width: 250,
    height: 40,
  },
  scheduleButton: {
    position: "absolute",
    bottom: 40,
    backgroundColor: "#333",
    padding: 15,
    borderRadius: 8,
    width: "70%",
  },
  scheduleText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
