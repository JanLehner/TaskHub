import { View, Text, Pressable, TextInput, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "../stylesheets/style";
import { stylesCreateBoard } from "../stylesheets/styleCreateBoard";
import { Header } from "../components/header";
import { Main } from "../components/main";
import { Footer } from "../components/footer";

export default function CreateBoardScreen() {
  const [enteredTitle, UpdateEnteredTitle] = useState("");
  const [enteredDescription, UpdateEnteredDescription] = useState("");
  const [errorMessage, UpdateErrorMessage] = useState("Error");

  return (
    <View style={styles.container}>
      <Header text="Create a board" />
      <Main>
        <TextInput style={stylesCreateBoard.inputField} onChangeText={UpdateEnteredTitle}
          value={enteredTitle} placeholder="Enter a title" />
        <TextInput style={{ ...stylesCreateBoard.inputField, ...stylesCreateBoard.inputFieldBig }} onChangeText={UpdateEnteredDescription}
          value={enteredDescription} placeholder="Enter a description" />
        <View style={{ ...styles.flexbox, ...stylesCreateBoard.loginInformationTextView }}>
          <Text style={stylesCreateBoard.loginErrorMessageText}>{errorMessage}</Text>
        </View>
        <Pressable style={{ ...styles.flexbox, ...stylesCreateBoard.addBtn }}>
          <Text style={stylesCreateBoard.addBtnText}>Add</Text>
        </Pressable>
      </Main>
      <Footer text="&copy; 2023" />
    </View >
  );
};