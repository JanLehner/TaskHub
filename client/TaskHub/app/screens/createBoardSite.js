import { View, Text, Pressable, TextInput, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "../stylesheets/style";
import { stylesCreateBoard } from "../stylesheets/styleCreateBoard";
import { Header } from "../components/header";
import { Main } from "../components/main";
import { Footer } from "../components/footer";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CreateBoardScreen() {
  const [enteredTitle, UpdateEnteredTitle] = useState("");
  const [enteredDescription, UpdateEnteredDescription] = useState("");
  const [enteredPassword, UpdateEnteredPassword] = useState("");
  const [errorMessage, UpdateErrorMessage] = useState("Error");
  const createBoard = async () => {
    try {
      const owner = await AsyncStorage.getItem('username');
      const response = await fetch('http://localhost:8080/create/board', {
        method: 'POST',
        headers: {
          'Authoritazion': await AsyncStorage.getItem('token'),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: enteredTitle,
          owner: owner, 
          public: true,
          password: enteredPassword,
        })
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
      UpdateErrorMessage(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <Header text="Create a board" />
      <Main>
        <TextInput style={stylesCreateBoard.inputField} onChangeText={UpdateEnteredTitle}
          value={enteredTitle} placeholder="Enter a title" />
        <TextInput style={{ ...stylesCreateBoard.inputField, ...stylesCreateBoard.inputFieldBig }} onChangeText={UpdateEnteredDescription}
          value={enteredDescription} placeholder="Enter a description" />
        <TextInput style={{ ...stylesCreateBoard.inputField, ...stylesCreateBoard.inputFieldBig }} onChangeText={UpdateEnteredPassword}
          value={enteredPassword} placeholder="Enter a password" />
        <View style={{ ...styles.flexbox, ...stylesCreateBoard.loginInformationTextView }}>
          <Text style={stylesCreateBoard.loginErrorMessageText}>{errorMessage}</Text>
        </View>
        <Pressable style={{ ...styles.flexbox, ...stylesCreateBoard.addBtn }} onPress={createBoard}>
          <Text style={stylesCreateBoard.addBtnText}>Add</Text>
        </Pressable>
      </Main>
      <Footer text="&copy; 2023" />
    </View >
  );
};