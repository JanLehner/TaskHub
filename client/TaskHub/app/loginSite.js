import { View, Text, Pressable, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "./stylesheets/style";
import { stylesLogin } from "./stylesheets/styleLogin";

export default function LoginScreen() {
  const [enteredUsername, UpdateEnteredUsername] = useState("");
  const [enteredPassword, UpdateEnteredPassword] = useState("");

  return <View style={styles.container}>
    <Text style={styles.headerText}>TaskHub</Text>
    <View style={{ ...styles.flexbox, ...styles.main }}>
      <Text>Login</Text>
      <TextInput onChangeText={UpdateEnteredUsername} 
      value={enteredUsername} placeholder="Username" />
      <TextInput onChangeText={UpdateEnteredPassword} 
      value={enteredPassword} placeholder="Password" />
    </View>
    <Text>&copy; 2023</Text>
  </View >;
};