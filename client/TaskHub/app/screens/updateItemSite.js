import { View, Text, Pressable, TextInput, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "../stylesheets/style";
import { styleCreateItem } from "../stylesheets/styleCreateItem";
import { Header } from "../components/header";
import { Main } from "../components/main";
import { Footer } from "../components/footer";

export default function CreateItemScreen() {
  const [enteredTitle, UpdateEnteredTitle] = useState("");
  const [enteredDescription, UpdateEnteredDescription] = useState("");
  const [enteredDueDate, UpdateEnteredDueDate] = useState("");
  const [errorMessage, UpdateErrorMessage] = useState("Test");

  return (
    <View style={styles.container}>
      <Header text="Update item" />
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
        <Pressable style={{ ...styles.flexbox, ...styleCreateItem.saveBtn }}>
          <Text style={styleCreateItem.saveBtnText}>Save</Text>
        </Pressable>
      </Main>
      <Footer text="&copy; 2023" />
    </View >
  );
};