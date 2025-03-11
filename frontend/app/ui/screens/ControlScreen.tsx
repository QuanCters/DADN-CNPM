import Header from "@/app/ui/components/Header";
import PrimaryBtn from "@/app/ui/components/PrimaryBtn";
import RoomCard from "@/app/ui/components/RoomCard";
import React from "react";
import { StyleSheet, View } from "react-native";

type ControlScreenProps = {
  onAddPinClick: () => void;
  isAccess: boolean;
};

const ControlScreen = (props: ControlScreenProps) => {
  console.log(props.isAccess);
  return (
    <View style={styles.container}>
      <Header>Control Device</Header>
      {!props.isAccess ? (
        <View>
          <PrimaryBtn onPress={props.onAddPinClick}>
            Add Home Access Pin
          </PrimaryBtn>
        </View>
      ) : (
        <View style={styles.roomContainer}>
          <RoomCard roomName="Kitchen" deviceCount={1} />
          <RoomCard roomName="Living Room" deviceCount={2} />
          <RoomCard roomName="Bed Room" deviceCount={3} />
        </View>
      )}
    </View>
  );
};

export default ControlScreen;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  roomContainer: { flex: 1, width: "80%", gap: 20, marginTop: 16 },
});
