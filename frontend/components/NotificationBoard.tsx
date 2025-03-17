import React from "react";
import { StyleSheet, Text, View } from "react-native";

const NotificationBoard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notification Board</Text>
    </View>
  );
};

export default NotificationBoard;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    margin: 20,
    alignItems: "center",
    height: 200,
    backgroundColor: "#F5F5F7",
    borderRadius: 20,
    elevation: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    borderBottomWidth: 1,
    width: "100%",
    textAlign: "center",
    borderBottomColor: "#D1D1D6",
  },
});
