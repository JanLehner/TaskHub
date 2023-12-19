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

  return (
    <View style={styles.container}>
      <Header text="TaskHub" />
      <Main>
        <Text style={stylesLogin.loginTitle}>Register</Text>
        <TextInput style={stylesLogin.loginInputField} onChangeText={UpdateEnteredUsername}
          value={enteredUsername} placeholder="Username" />
        <TextInput style={stylesLogin.loginInputField} onChangeText={UpdateEnteredPassword}
          value={enteredPassword} placeholder="Password" />
        <TextInput style={stylesLogin.loginInputField} onChangeText={UpdateEnteredPassword}
          value={enteredPassword} placeholder="Re-enter password" />
        <Link href="/screens/loginSite" asChild>
          <Pressable style={{ ...styles.flexbox, ...stylesLogin.loginInformationTextView }}>
            <Text style={stylesLogin.loginRegisterText}>Already have an account? Log in</Text>
          </Pressable>
        </Link>
        <View style={{ ...styles.flexbox, ...stylesLogin.loginInformationTextView }}>
          <Text style={stylesLogin.loginErrorMessageText}>{errorMessage}</Text>
        </View>
        <Pressable style={{ ...styles.flexbox, ...stylesLogin.loginBtn }} onPress={() => UpdateErrorMessage("Incorrect username or password.")}>
          <Text style={stylesLogin.loginBtnText}>Register</Text>
        </Pressable>
      </Main>
      <Footer text="&copy; 2023" />
    </View >
  );
};