import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Title from "@/app/ui/components/Title";
import { Colors } from "@/constants/Colors";
import PrimaryBtn from "@/app/ui/components/PrimaryBtn";

interface DialogProps {
  modalVisible: boolean;
  onModalVisibleChange: (visible: boolean) => void;
  homeAccessCode: string;
  setIsAccess: (isAccess: boolean) => void;
}

const Dialog: React.FC<DialogProps> = ({
  modalVisible,
  homeAccessCode,
  onModalVisibleChange,
  setIsAccess,
}) => {
  const [messAndHomeSeries, setMessAndHomeSeries] = useState({
    homeSeries: "",
    message: "Enter Your home series",
  });

  function handleAddHome() {
    // MATCH HOME ACCESS CODE
    if (messAndHomeSeries.homeSeries === homeAccessCode) {
      // ADD HOME
      onModalVisibleChange(false);
      setIsAccess(true);
    } else {
      // SHOW ERROR
      setMessAndHomeSeries({
        homeSeries: "",
        message: "Invalid Home Series",
      });
    }
  }

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => onModalVisibleChange(false)}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Title>Access Your Home</Title>

          {/* Home Icon */}
          <View style={styles.iconPlaceholder}>
            {/* Replace with actual image/icon */}
            <MaterialCommunityIcons
              name="home-automation"
              size={52}
              color={Colors.black600}
            />
          </View>

          {/* Input Field */}
          <TextInput
            style={styles.input}
            placeholder={messAndHomeSeries.message}
            value={messAndHomeSeries.homeSeries}
            onChangeText={(text) => {
              setMessAndHomeSeries({
                homeSeries: text,
                message: "Enter Your home series",
              });
            }}
          />

          {/* Buttons */}
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: Colors.primary800 }]}
              onPress={handleAddHome}
            >
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: Colors.backgroundColor },
              ]}
              onPress={() => onModalVisibleChange(false)}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Dialog;

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
});
