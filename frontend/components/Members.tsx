import React from "react";
import { View, StyleSheet, Image, FlatList } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
let MEMBERS = [];
for (let i = 0; i < 10; i++) {
  MEMBERS.push({
    id: i,
    name: "John Doe",
    avatar: require("@/assets/images/icon/avatar.png"),
  });
}
const Members = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.memberContainer}
        data={MEMBERS}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "flex-start",
          gap: 13,
        }}
        renderItem={({ item }) => {
          return (
            <View style={styles.avatarContainer}>
              <Image style={styles.avatarImg} source={item.avatar} />
            </View>
          );
        }}
      />
      <View
        style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}
      >
        <View style={styles.iconWrapper}>
          <Entypo name="plus" size={20} color="#fff" />
        </View>
      </View>
    </View>
  );
};

export default Members;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 30,
  },
  memberContainer: {
    width: "70%",
  },
  avatarContainer: {
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 50,
    height: "auto",
  },
  avatarImg: {
    width: 35,
    height: 35,
  },
  iconWrapper: {
    borderRadius: 50,
    padding: 2,
    borderWidth: 2,
    borderColor: "white",
  },
});
