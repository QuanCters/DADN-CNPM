import Dialog from "@/components/Dialog";
import Header from "@/components/Header";
import PrimaryBtn from "@/components/PrimaryBtn";
import RoomCard from "@/components/RoomCard";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import QuickAccessCard from "@/components/QuickAccessCard";
import deviceTypes from "@/constants/deviceType";
import roomTypes from "@/constants/roomType";

const ACCESS_CODE = "1234";
const devices = {
  Kitchen: [
    { id: "1", name: "Air Conditioner" },
    { id: "2", name: "Smart Fridge" },
  ],
  Bedroom: [
    { id: "3", name: "Smart Light" },
    { id: "4", name: "Smart TV" },
  ],
};

const ControlScreen = () => {
  const [isAccess, setIsAccess] = useState(false);
  const [isOpenPrompt, setIsOpenPrompt] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<undefined | string>(
    undefined
  );

  return (
    <View style={styles.container}>
      <Dialog
        homeAccessCode={ACCESS_CODE}
        modalVisible={isOpenPrompt}
        setIsAccess={setIsAccess}
        onModalVisibleChange={setIsOpenPrompt}
      />

      <Header>Control Device</Header>
      {!isAccess ? (
        <View>
          <PrimaryBtn
            // onPress={props.onAddPinClick}
            onPress={() => setIsOpenPrompt(true)}
          >
            Add Home Access Pin
          </PrimaryBtn>
        </View>
      ) : (
        !selectedRoom && (
          <View style={styles.roomContainer}>
            <RoomCard
              roomName={roomTypes.kitchen}
              deviceCount={1}
              onPress={() => setSelectedRoom(roomTypes.kitchen)}
            />
            <RoomCard
              roomName={roomTypes.livingRoom}
              deviceCount={2}
              onPress={() => setSelectedRoom(roomTypes.livingRoom)}
            />
            <RoomCard
              roomName={roomTypes.bedroom}
              deviceCount={3}
              onPress={() => setSelectedRoom(roomTypes.bedroom)}
            />
          </View>
        )
      )}

      {selectedRoom && (
        // FIXME: using flatlist
        <View style={styles.cardContainer}>
          <QuickAccessCard
            havingSwitch={false}
            deviceName={deviceTypes.fan}
            roomName={roomTypes.kitchen}
          />
          <QuickAccessCard
            havingSwitch={false}
            deviceName={deviceTypes.airConditioner}
            roomName={roomTypes.livingRoom}
          />
          <QuickAccessCard
            havingSwitch={false}
            deviceName={deviceTypes.light}
            roomName={roomTypes.kitchen}
          />
          <QuickAccessCard
            havingSwitch={false}
            deviceName={deviceTypes.fan}
            roomName={roomTypes.bedroom}
          />
        </View>
      )}
    </View>
  );
};

export default ControlScreen;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  roomContainer: { flex: 1, width: "80%", gap: 20, marginTop: 16 },
  cardContainer: {
    flex: 1,
    width: "80%",
    gap: 20,
    marginTop: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
