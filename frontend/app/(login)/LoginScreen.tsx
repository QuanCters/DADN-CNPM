import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/slices/userSlice";
import LoginFormValues from "@/interface/loginFormValues.interface";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState<LoginFormValues>({
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    console.log("Login form submitted:", state);
    try {
      const response = await fetch(
        process.env.EXPO_PUBLIC_BACKEND_URL + "/user/login",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: state.email,
            password: state.password,
          }),
        }
      );

      const result = await response.json();
      console.log(result);

      if (result.status === 200) {
        const home = await fetch(
          process.env.EXPO_PUBLIC_BACKEND_URL + "/device/user/" + result.userId,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );

        const homeList = await home.json();

        let selectedHome = homeList.filter(
          (home: any) => home.manager_id === result.userId
        )[0];

        if (!selectedHome) {
          selectedHome = homeList[0];
        }

        dispatch(
          setUser({
            homes: homeList,
            selectedHome: selectedHome.home_id,
            isAuthenticated: true,
            first_name: result.first_name,
            last_name: result.last_name,
            user_id: result.userId,
          })
        );

        router.push("/(screens)/HomeScreen");
      } else {
        console.error("Login failed:", result.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleForgotPassword = async () => {
    router.push("/ForgetScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Login here</Text>
      <Text style={styles.subHeaderText}>
        Welcome back, you've been missed!
      </Text>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setState({ ...state, email: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry
          onChangeText={(text) => setState({ ...state, password: text })}
        />
      </View>

      <View style={styles.forgotPasswordContainer}>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.loginButtonContainer}>
        <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
          <Text style={styles.loginButtonText}>Sign in</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.createAccountContainer}>
        <TouchableOpacity onPress={() => router.push("/RegisterScreen")}>
          <Text style={styles.createAccountText}>Create new account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    backgroundColor: "white",
    height: "100%",
  },
  headerText: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
    color: "#1F41BB",
  },
  subHeaderText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginHorizontal: 60,
  },
  formContainer: {
    marginTop: 60,
    alignItems: "center",
  },
  input: {
    backgroundColor: "#F1F4FF",
    borderRadius: 10,
    width: "80%",
    height: 60,
    marginBottom: 20,
    paddingLeft: 10,
    fontSize: 16,
  },
  forgotPasswordContainer: {
    width: "90%",
    alignItems: "flex-end",
  },
  forgotPasswordText: {
    height: 30,
    marginBottom: 30,
    color: "#1F41BB",
    fontWeight: "bold",
  },
  loginButtonContainer: {
    alignItems: "center",
  },
  loginButton: {
    width: "80%",
    borderRadius: 10,
    height: 60,
    justifyContent: "center",
    backgroundColor: "#1F41BB",
  },
  loginButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  createAccountContainer: {
    alignItems: "center",
  },
  createAccountText: {
    marginTop: 30,
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default LoginScreen;
