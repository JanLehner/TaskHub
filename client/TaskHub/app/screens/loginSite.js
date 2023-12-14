import { View, Text, Pressable, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "../stylesheets/style";
import { stylesLogin } from "../stylesheets/styleLogin";
import { Header } from "../components/header";
import { Main } from "../components/main";
import { Footer } from "../components/footer";

export default function LoginScreen() {
  const [enteredUsername, UpdateEnteredUsername] = useState("");
  const [enteredPassword, UpdateEnteredPassword] = useState("");

  return (
    <View style={styles.container}>
      <Header text="TaskHub" />
      <Main>
        <Text style={stylesLogin.loginTitle}>Login</Text>
        <TextInput style={stylesLogin.loginInputField} onChangeText={UpdateEnteredUsername}
          value={enteredUsername} placeholder="Username" />
        <TextInput style={stylesLogin.loginInputField} onChangeText={UpdateEnteredPassword}
          value={enteredPassword} placeholder="Password" />
        <Pressable style={{ ...styles.flexbox, ...stylesLogin.loginBtn }}>
          <Text style={stylesLogin.loginBtnText}>Log in</Text>
        </Pressable>
      </Main>
      <Footer text="&copy; 2023" />
    </View >
  );
};