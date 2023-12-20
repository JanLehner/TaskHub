import { View, Text, Pressable, TextInput, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "../stylesheets/style";
import { styleCreateItem } from "../stylesheets/styleCreateItem";
import { Header } from "../components/header";
import { Main } from "../components/main";
import { Footer } from "../components/footer";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CreateItemScreen() {
  const [enteredTitle, UpdateEnteredTitle] = useState("");
  const [enteredDescription, UpdateEnteredDescription] = useState("");
  const [enteredDueDate, UpdateEnteredDueDate] = useState("");
  const [errorMessage, UpdateErrorMessage] = useState("Test");

  const saveItem = async () => {
    const owner = await AsyncStorage.getItem('username');
    const boardName = await AsyncStorage.getItem('boardName');
    const response = await fetch(`http://localhost:8080/board/create/${boardName}`, {
      method: 'POST',
      headers: {
        'Authoritazion': await AsyncStorage.getItem('token'),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: enteredTitle,
        description: enteredDescription,
        dueDate: enteredDueDate,
        owner: owner
      })
    });
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      console.log(message);
      throw new Error(message);
    }
  
    const resData = await response.json();
    console.log(resData);
  };
  return (
    <View style={styles.container}>
      <Header text="Create item" />
      <Main>
        <View style={{ ...styles.flexbox, ...styleCreateItem.mainHeader }}>
          <Pressable style={{ ...styles.flexbox, ...styleCreateItem.backBtn }}>
            <Text>Back to the items</Text>
          </Pressable>
        </View>
        <View style={{ ...styles.flexbox, ...styleCreateItem.formView }}>
          <TextInput style={styleCreateItem.formInputfield} onChangeText={UpdateEnteredTitle}
            value={enteredTitle} placeholder="Title" />
          <TextInput style={styleCreateItem.formInputfield} onChangeText={UpdateEnteredDescription}
            value={enteredDescription} placeholder="Description" />
          <TextInput style={styleCreateItem.formInputfield} onChangeText={UpdateEnteredDueDate}
            value={enteredDueDate} placeholder="Due date" />
          <View style={{ ...styles.flexbox, ...styleCreateItem.loginInformationTextView }}>
            <Text style={styleCreateItem.loginErrorMessageText}>{errorMessage}</Text>
          </View>
        </View>
        <Pressable style={{ ...styles.flexbox, ...styleCreateItem.saveBtn }} onPress={saveItem}>
          <Text style={styleCreateItem.saveBtnText}>Save</Text>
        </Pressable>
      </Main>
      <Footer text="&copy; 2023" />
    </View >
  );
};