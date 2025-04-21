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
import AntDesign from "@expo/vector-icons/AntDesign";
import Title from "@/components/Title";
import { Colors } from "@/constants/Colors";
import { useDispatch, useSelector } from "react-redux";
import { addHome } from "@/redux/slices/userSlice";

interface DialogProps {
  modalVisible: boolean;
  onModalVisibleChange: (visible: boolean) => void;
  setIsAccess: (isAccess: boolean) => void;
}

const AddUserDialog: React.FC<DialogProps> = ({
  modalVisible,
  onModalVisibleChange,
  setIsAccess,
}) => {
  const [messAndUserMail, setMessAndUserMail] = useState({
    UserMail: "",
    message: "Enter user email",
  });

  const info = useSelector((state: any) => state.user);

  const handleAddHome = async () => {
    const { UserMail } = messAndUserMail;

    if (!UserMail) {
      setMessAndUserMail({
        UserMail: "",
        message: "Please enter user email",
      });
      return;
    }

    try {
      console.log("UserMail", UserMail);
      const response = await fetch(
        process.env.EXPO_PUBLIC_BACKEND_URL + "/home/add",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userEmail: UserMail,
            homeId: info.selectedHome,
          }),
        }
      );

      if (!response.ok) {
        console.log("response", response);
        throw new Error("Failed to add user to home");
      }

      onModalVisibleChange(false);
      setIsAccess(true);
      setMessAndUserMail({
        UserMail: "",
        message: "Enter user email",
      });
      Alert.alert("Success", "User added successfully");
    } catch (error) {
      setMessAndUserMail({
        UserMail: "",
        message: "Invalid User email",
      });
      Alert.alert("Error", "Failed to add user. Please try again.");
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => onModalVisibleChange(false)}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Title>Add User</Title>

          <View style={styles.iconPlaceholder}>
            <AntDesign name="adduser" size={52} color={Colors.black600} />
          </View>

          {/* Input Field */}
          <TextInput
            style={styles.input}
            placeholder={messAndUserMail.message}
            value={messAndUserMail.UserMail}
            onChangeText={(text) => {
              setMessAndUserMail({
                UserMail: text,
                message: "Enter User email",
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

export default AddUserDialog;

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
