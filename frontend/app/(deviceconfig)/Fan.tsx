import React, { useState } from "react";
import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";
import Header from "@/components/Header";
import Entypo from "@expo/vector-icons/Entypo";
import Slider from "@react-native-community/slider";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Colors } from "@/constants/Colors";
import Title from "@/components/Title";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const Fan = () => {
  const [isFanOn, setIsFanOn] = useState(true);
  const [fanSpeed, setFanSpeed] = useState(1);
  const [mode, setMode] = useState("Normal");

  const toggleFan = () => setIsFanOn(!isFanOn);
  const increaseSpeed = () => {
    if (isFanOn) setFanSpeed((prev) => (prev < 5 ? prev + 1 : prev));
    setIsFanOn(true);
  };
  const decreaseSpeed = () =>
    setFanSpeed((prev) => (prev > 1 ? prev - 1 : prev));

  const iconUI = isFanOn ? (
    <MaterialCommunityIcons name="fan" size={80} color={Colors.primary800} />
  ) : (
    <MaterialCommunityIcons name="fan-off" size={80} color="#CCC" />
  );
  const speedUI = isFanOn ? (
    <Text style={styles.speedText}>{fanSpeed}</Text>
  ) : (
    <Text style={styles.speedText}></Text>
  );

  return (
    <View style={styles.container}>
      <Header>Fan</Header>

      <Switch
        value={isFanOn}
        onValueChange={toggleFan}
        style={{ alignSelf: "flex-end", marginRight: 20 }}
      />

      <View
        style={{
          marginTop: 30,
          alignItems: "center",
          height: 350,
          maxHeight: "40%",
        }}
      >
        {/* <Feather name="wind" size={80} color={isFanOn ? "#007AFF" : "#CCC"} /> */}
        {iconUI}
        {speedUI}
        <View style={styles.iconRowContainer}>
          <TouchableOpacity
            onPress={decreaseSpeed}
            style={{ marginHorizontal: 20 }}
          >
            {/* <Feather name="minus-circle" size={40} color="#007AFF" /> */}
            <View style={styles.iconContainer}>
              <Entypo name="minus" size={28} color="#000000" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={increaseSpeed}
            style={{ marginHorizontal: 20 }}
          >
            {/* <Feather name="plus-circle" size={40} color="#007AFF" /> */}
            <View style={styles.iconContainer}>
              <Entypo name="plus" size={28} color="#000000" />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ marginTop: 30 }}>
        <View style={styles.modeContainer}>
          {["Normal", "Breeze", "Silent", "Auto"].map((m) => {
            let iconUI;
            if (m === "Normal")
              iconUI = (
                <FontAwesome5
                  name="snowflake"
                  size={20}
                  color={mode === m ? "white" : Colors.black500}
                />
              );
            else if (m === "Silent")
              iconUI = (
                <MaterialCommunityIcons
                  name="volume-mute"
                  size={20}
                  color={mode === m ? "white" : Colors.black500}
                />
              );
            else if (m === "Breeze")
              iconUI = (
                <MaterialCommunityIcons
                  name="weather-windy"
                  size={20}
                  color={mode === m ? "white" : Colors.black500}
                />
              );
            else if (m === "Auto")
              iconUI = (
                <MaterialCommunityIcons
                  name="fan-speed-1"
                  size={20}
                  color={mode === m ? "white" : Colors.black500}
                />
              );
            return (
              <TouchableOpacity
                key={m}
                onPress={() => setMode(m)}
                // style={[
                //   {
                //     padding: 10,
                //     marginHorizontal: 5,
                //     borderRadius: 10,
                //     backgroundColor: mode === m ? "#007AFF" : "#CCC",
                //   },
                // ]}
              >
                <LinearGradient
                  style={styles.btn}
                  colors={
                    mode !== m ? ["#DFE0E4", "#FFFFFF"] : ["#0051E3", "#0ADFF4"]
                  }
                >
                  {iconUI}
                  <Text
                    style={[
                      styles.btnText,
                      { color: mode === m ? "white" : Colors.black500 },
                    ]}
                  >
                    {m}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <TouchableOpacity style={styles.scheduleButton}>
        <Text style={styles.scheduleText}>Set Schedule</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Fan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF1F8",
    alignItems: "center",
  },
  speedText: {
    fontSize: 32,
    marginTop: 10,
  },

  iconRowContainer: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "center",
    gap: 20,
  },
  iconContainer: {
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#FFF",
    // elevation: 10,
  },
  btn: {
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    gap: 5,
  },
  btnText: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 14,
  },
  modeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginHorizontal: 20,
    marginTop: 20,
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
