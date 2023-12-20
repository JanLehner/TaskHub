import { View, Text, Pressable, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "../stylesheets/style";
import { stylesLogin } from "../stylesheets/styleLogin";
import { Header } from "../components/header";
import { Main } from "../components/main";
import { Footer } from "../components/footer";
import { Link } from "expo-router";

export default function RegisterScreen() {
  const [enteredUsername, UpdateEnteredUsername] = useState("");
  const [enteredPassword, UpdateEnteredPassword] = useState("");
  const [reenteredPassword, UpdateReenteredPassword] = useState("");
  const [errorMessage, UpdateErrorMessage] = useState("");

  const handleRegistration = async () => {
    try {
      const response = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: enteredUsername,
          password: enteredPassword,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Registration successful");
      } else {
        const errorData = await response.json();
        alert(errorData.error);
        UpdateErrorMessage(errorData.error || "Error while signing in");
      }
    } catch (error) {
      UpdateErrorMessage("Error while signing in");
    }
  };

  return (
    <View style={styles.container}>
      <Header text="TaskHub" />
      <Main>
        <Text style={stylesLogin.loginTitle}>Register</Text>
        <TextInput
          style={stylesLogin.loginInputField}
          onChangeText={UpdateEnteredUsername}
          value={enteredUsername}
          placeholder="Username"
        />
        <TextInput
          style={stylesLogin.loginInputField}
          onChangeText={UpdateEnteredPassword}
          value={enteredPassword}
          placeholder="Password"
        />
        <Link href="/screens/loginSite" asChild>
          <Pressable
            style={{
              ...styles.flexbox,
              ...stylesLogin.loginInformationTextView,
            }}
          >
            <Text style={stylesLogin.loginRegisterText}>
              Already have an account? Log in
            </Text>
          </Pressable>
        </Link>
        <View
          style={{ ...styles.flexbox, ...stylesLogin.loginInformationTextView }}
        >
          <Text style={stylesLogin.loginErrorMessageText}>{errorMessage}</Text>
        </View>
        <Pressable
          style={{ ...styles.flexbox, ...stylesLogin.loginBtn }}
          onPress={handleRegistration}
        >
          <Text style={stylesLogin.loginBtnText}>Register</Text>
        </Pressable>
      </Main>
      <Footer text="&copy; 2023" />
    </View>
  );
}