import Title from "@/components/Title";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface HeaderProps {
  children: string;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <View style={styles.bar}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Ionicons name="chevron-back" size={12} color="#000000" />
      </View>
      <Title>{children}</Title>
      <Text></Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  bar: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 16,
    paddingTop: 40,
  },
});
