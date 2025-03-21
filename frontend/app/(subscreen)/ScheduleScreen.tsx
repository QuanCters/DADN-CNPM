import Header from "@/components/Header";
import ScheduleList from "@/components/ScheduleList";
import React from "react";
import { StyleSheet, View } from "react-native";

const ScheduleScreen = () => {
  return (
    <View style={styles.container}>
      <ScheduleList />
    </View>
  );
};

export default ScheduleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
