import NumberSlider from "@/components/NumberSlider";
import Title from "@/components/Title";
import { Colors } from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Modal, Text, TouchableOpacity, View, StyleSheet } from "react-native";

function createNumberArray(start: number, end: number) {
  const arr = [
    { id: Math.random() * 10000, title: "" },
    { id: Math.random() * 10000, title: "" },
  ];
  for (let i = start; i < end; i++) {
    const random = Math.random() * 10000;
    arr.push({ id: random, title: i.toString() });
  }
  arr.push({ id: Math.random() * 10000, title: "" });
  arr.push({ id: Math.random() * 10000, title: "" });
  return arr;
}

const WEEKDAYS = [
  {
    id: "monday",
    title: "M",
  },
  {
    id: "tuesday",
    title: "T",
  },
  {
    id: "wednesday",
    title: "W",
  },
  {
    id: "thursday",
    title: "T",
  },
  {
    id: "friday",
    title: "F",
  },
  {
    id: "saturday",
    title: "S",
  },
  {
    id: "sunday",
    title: "S",
  },
];

type ScheduleModalProps = {
  action: "update" | "add" | undefined;
  onModalVisibleChange: () => void;
  initTime: string;
};

const ScheduleModal = ({
  action,
  onModalVisibleChange,
  initTime,
}: ScheduleModalProps) => {
  const [hour, minute, ampm] = initTime.split(":");

  const [time, setTime] = useState({
    hour: +hour,
    minute: +minute,
    ampm: ampm,
  });
  const [repeat, setRepeat] = useState<string[]>([]);

  useEffect(() => {
    if (action === "add") {
      const now = new Date();
      let hour = now.getHours();
      const minute = now.getMinutes();
      const ampm = hour >= 12 ? "PM" : "AM";
      hour = hour % 12;
      hour = hour === 0 ? 12 : hour;

      setTime({ hour, minute, ampm });
    }
  }, [setTime]);

  function handleToggleRepeat(id: string) {
    if (repeat.includes(id)) {
      setRepeat((prev) => prev.filter((day) => day !== id));
    } else {
      setRepeat((prev) => [...prev, id]);
    }
  }

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={action !== undefined}
      onRequestClose={() => onModalVisibleChange()}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Title>
            {action === "update" ? "Update Schedule" : "Add Schedule"}
          </Title>

          {/* Home Icon */}
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 25,
              }}
            >
              <NumberSlider data={createNumberArray(0, 13)} value={time.hour} />
              <Text style={{ fontSize: 32 }}>:</Text>
              <NumberSlider
                data={createNumberArray(0, 60)}
                value={time.minute}
              />
              <NumberSlider
                value={time.ampm === "AM" ? 0 : 1}
                data={[
                  { id: Math.random() * 10000, title: "" },
                  { id: Math.random() * 10000, title: "" },
                  { id: Math.random() * 10000, title: "AM" },
                  { id: Math.random() * 10000, title: "PM" },
                  { id: Math.random() * 10000, title: "" },
                  { id: Math.random() * 10000, title: "" },
                ]}
              />
              {/* <NumberSlider data={} /> */}
            </View>
            <Text>Repeat</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 6,
              }}
            >
              {WEEKDAYS.map((day) => {
                let styleCSS = styles.weekdaysContainer;
                let textStyles = { fontSize: 12 };
                if (repeat.includes(day.id)) {
                  styleCSS = {
                    ...styles.weekdaysContainer,
                    // @ts-ignore
                    backgroundColor: Colors.primary800,
                  };
                  // @ts-ignore
                  textStyles = { fontSize: 12, color: "white" };
                }
                return (
                  <TouchableOpacity
                    key={day.id}
                    onPress={() => handleToggleRepeat(day.id)}
                    style={styleCSS}
                  >
                    <Text style={textStyles}>{day.title}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* Buttons */}
          <View style={styles.btnContainer}>
            {/* <TouchableOpacity
              style={[styles.button, { backgroundColor: Colors.primary800 }]}
              onPress={handleAddHome}
            >
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity> */}

            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: Colors.backgroundColor },
              ]}
              onPress={onModalVisibleChange}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ScheduleModal;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: 300,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    height: 600,
  },
  iconPlaceholder: {
    marginTop: 20,
    width: 100,
    height: 100,
    backgroundColor: Colors.iconBackground,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginBottom: 60,
    elevation: 4,
  },
  input: {
    width: "100%",
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 40,
    backgroundColor: Colors.backgroundColor,
    elevation: 4,
    textAlign: "center",
  },
  btnContainer: {
    width: "80%",
    gap: 10,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  buttonText: { color: "white", fontSize: 16 },
  cancelButtonText: { color: "#333", fontSize: 16 },
  weekdaysContainer: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.primary800,
    padding: 2,
    width: 25,
    height: 25,
    justifyContent: "center",
    borderRadius: 100,
  },
});
