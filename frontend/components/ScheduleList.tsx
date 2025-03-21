import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  FlatList,
  Switch,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Pressable,
} from "react-native";

import { router } from "expo-router";
import ScheduleModal from "@/components/ScheduleModal";

// ATTENTION: timeFormat is "HH:MM:AM/PM"
const ScheduleList = () => {
  const [alarms, setAlarms] = useState([
    {
      id: "1",
      time: "06:00:AM",
      days: ["M", "T", "W"],
      enabled: true,
      turnTo: "on",
    },
    {
      id: "2",
      time: "07:00:PM",
      days: ["S", "M", "T", "W", "T", "F", "S"],
      enabled: false,
      turnTo: "off",
    },
    {
      id: "3",
      time: "10:35:PM",
      days: ["M", "T", "W", "T", "F"],
      enabled: true,
      turnTo: "off",
    },
    {
      id: "4",
      time: "08:00:AM",
      days: ["M", "F"],
      enabled: false,
      turnTo: "on",
    },
  ]);

  const [action, setAction] = useState<"update" | "add" | undefined>(undefined);
  const [currTime, setCurrTime] = useState("00:00:AM");

  const toggleSwitch = (id: string) => {
    setAlarms((prevAlarms) =>
      prevAlarms.map((alarm) =>
        alarm.id === id ? { ...alarm, enabled: !alarm.enabled } : alarm
      )
    );
  };

  const renderAlarmItem = ({ item }: any) => (
    <Pressable
      onPress={() => {
        setAction("update");
        setCurrTime(item.time);
      }}
      style={styles.alarmItem}
    >
      <View>
        <Text
          style={[
            styles.alarmTime,
            item.enabled ? styles.activeText : styles.inactiveText,
          ]}
        >
          {item.time}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={[
              styles.alarmDays,
              {
                marginRight: 10,
                fontWeight: "500",
                borderRightWidth: 1,
                borderRightColor: "#ddd",
                paddingRight: 10,
              },
            ]}
          >
            {item.turnTo === "on" ? "Turn On" : "Turn Off"}
          </Text>
          <Text style={styles.alarmDays}>{item.days.join(" ")}</Text>
        </View>
      </View>
      <Switch
        value={item.enabled}
        onValueChange={() => toggleSwitch(item.id)}
      />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="chevron-back" size={18} color="#000000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Alarm</Text>
        <TouchableOpacity onPress={() => setAction("add")}>
          <Ionicons name="add" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={alarms}
        keyExtractor={(item) => item.id}
        renderItem={renderAlarmItem}
      />

      {/* <Modal visible={modalVisible} animationType="slide" transparent></Modal> */}
      {action && (
        <ScheduleModal
          action={action}
          initTime={currTime}
          onModalVisibleChange={() => setAction(undefined)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  alarmItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  alarmTime: {
    fontSize: 24,
    fontWeight: "bold",
  },
  activeText: {
    color: "black",
  },
  inactiveText: {
    color: "gray",
  },
  alarmDays: {
    color: "gray",
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    width: 300,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  timeButton: {
    padding: 10,
    backgroundColor: "#ddd",
    borderRadius: 10,
    marginBottom: 20,
  },
  timeText: {
    fontSize: 20,
  },
  daysContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  dayButton: {
    padding: 10,
    margin: 5,
    borderRadius: 20,
    backgroundColor: "#eee",
  },
  daySelected: {
    backgroundColor: "#007bff",
  },
  dayText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ScheduleList;
