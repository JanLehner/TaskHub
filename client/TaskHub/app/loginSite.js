import { View, Text, Pressable, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "./stylesheets/style";

export default function LoginScreen() {
  const [enteredUsername, UpdateEnteredUsername] = useState("");
  const [enteredPassword, UpdateEnteredPassword] = useState("");

  return <View style={styles.container}>
    <View>
      <Text>TaskHub</Text>
      <TextInput onChangeText={UpdateEnteredUsername} 
      value={enteredUsername} placeholder="Username" />
      <TextInput onChangeText={UpdateEnteredPassword} 
      value={enteredPassword} placeholder="Password" />
    </View>
  </View >;
};