import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, ImageBackground } from "react-native";
import { Colors } from "@/constants/Colors";
import InformationBar from "@/components/InformationBar";
import Title from "@/components/Title";
import Fontisto from "@expo/vector-icons/Fontisto";
import { useSelector, UseSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { mqttService } from "@/services/mqtt.service";

interface UserData {
  homename: string;
  aiokey: string;
  feeds: string[];
}

const getCurrentDate = () => {
  const date = new Date();

  // Array for weekday names and month names
  const weekdayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let day = date.getDate();
  let month = date.getMonth();
  let weekday = date.getDay();

  // Determine the correct suffix for the day (st, nd, rd, th)
  const getDaySuffix = (day: number) => {
    if (day > 3 && day < 21) return "th"; // For 11th, 12th, 13th, etc.
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const daySuffix = getDaySuffix(day);

  // Format the date string
  const dateStr = `${weekdayNames[weekday]}, ${monthNames[month]} ${day}${daySuffix}`;
  return dateStr;
};

const USERNAME = "John Doe";
const NOTIFICATION_COUNT = 3;

const WelcomeCard = () => {
  const userData: UserData = useSelector((state: RootState) => state.user);
  const [temperature, setTemperature] = useState<string>("No data");
  const [water, setWater] = useState<string>("No data");
  const [notiCount, setNotiCount] = useState<string>("");

  useEffect(() => {});

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imgBackground}
        source={require("@/assets/images/welcome-background.png")}
        resizeMode="contain"
      />
      <View style={styles.mainBarContainer}>
        <View id="show-in4" style={styles.infoContainer}>
          <InformationBar imgSrc="weather-icon.png" text="28 C" />
          <InformationBar imgSrc="water-percent.png" text="70%" />
          <InformationBar imgSrc="calendar-icon.png" text={getCurrentDate()} />
        </View>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatarImg}
            source={require("@/assets/images/avatar.png")}
          />
        </View>
      </View>
      <View style={styles.nameContainer}>
        <Title ownStyle={{ color: "white" }}>Hi, {USERNAME}</Title>
        <View style={{ position: "relative" }}></View>
        <Fontisto name="bell-alt" size={24} color="#ffffff" />
        {NOTIFICATION_COUNT > 0 && (
          <View style={styles.notificationCount}>
            <Text style={{ color: "white", fontSize: 12 }}>
              {NOTIFICATION_COUNT}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default WelcomeCard;

const styles = StyleSheet.create({
  imgBackground: {
    flex: 1,

    position: "absolute",
    bottom: "-15%", // Adjust based on your design
    right: "-10%",
    width: "80%", // Control how much space the image takes
    height: "80%",
  },
  container: {
    // flex: 1,
    height: "30%",
    width: "100%",
    backgroundColor: Colors.primary800,
    borderEndEndRadius: 20,
    borderStartEndRadius: 20,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: Colors.primary800,
  },
  mainBarContainer: {
    marginTop: 22,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  avatarContainer: {
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 50,
  },
  avatarImg: {
    width: 40,
    height: 40,
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  notificationCount: {
    position: "absolute",
    right: 5,
    top: 5,
    backgroundColor: "red",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
