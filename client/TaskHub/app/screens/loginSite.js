import { View, Text, Pressable, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "../stylesheets/style";
import { stylesLogin } from "../stylesheets/styleLogin";
import { Header } from "../components/header";
import { Main } from "../components/main";
import { Footer } from "../components/footer";
import { Link } from "expo-router";

export default function LoginScreen() {
  const [enteredUsername, UpdateEnteredUsername] = useState("");
  const [enteredPassword, UpdateEnteredPassword] = useState("");
  const [errorMessage, UpdateErrorMessage] = useState("");

  return (
    <View style={styles.container}>
      <Header text="TaskHub" />
      <Main>
        <Text style={stylesLogin.loginTitle}>Login</Text>
        <TextInput style={stylesLogin.loginInputField} onChangeText={UpdateEnteredUsername}
          value={enteredUsername} placeholder="Username" />
        <TextInput style={stylesLogin.loginInputField} onChangeText={UpdateEnteredPassword}
          value={enteredPassword} placeholder="Password" />
        <Link href="/screens/registerSite" asChild>
          <Pressable style={{ ...styles.flexbox, ...stylesLogin.loginInformationTextView }}>
            <Text style={stylesLogin.loginRegisterText}>New to TaskHub? Create an account</Text>
          </Pressable>
        </Link>
        <View style={{ ...styles.flexbox, ...stylesLogin.loginInformationTextView }}>
          <Text style={stylesLogin.loginErrorMessageText}>{errorMessage}</Text>
        </View>
        <Pressable style={{ ...styles.flexbox, ...stylesLogin.loginBtn }} onPress={() => UpdateErrorMessage("Incorrect username or password.")}>
          <Text style={stylesLogin.loginBtnText}>Log in</Text>
        </Pressable>
      </Main>
      <Footer text="&copy; 2023" />
    </View >
  );
};