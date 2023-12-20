import { View, Text, Pressable, TextInput, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "../stylesheets/style";
import { stylesBoards } from "../stylesheets/styleBoards";
import { Header } from "../components/header";
import { Main } from "../components/main";
import { Footer } from "../components/footer";

export default function BoardScreen() {
  const [isEmptyPromptVisible, UpdateIsEmptyPromptVisible] = useState(true);
  const [emptyPromt, UpdateEmptypromt] = useState("ohh it's cold in here, time to create some boards by clicking on the plus.")

  useEffect(() => {
    if (isEmptyPromptVisible == true) {
      UpdateEmptypromt("ohh it's cold in here, time to create some boards by clicking on the plus.");
    } else {
      UpdateEmptypromt("");
    }
  }, [isEmptyPromptVisible]);

  console.log(emptyPromt);
  return (
    <View style={styles.container}>
      <Header text="Your boards" />
      <Main>
        <ScrollView style={stylesBoards.boardsScrollView} contentContainerStyle={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
          <Text style={stylesBoards.emptyPromt}>{emptyPromt}</Text>
          <View style={{ ...styles.flexbox, ...stylesBoards.boardItem }}>
            <Text style={stylesBoards.boardItemTitle}>Title</Text>
            <Text style={stylesBoards.boardItemDescription}>Description, bing bong bung bing bong</Text>
          </View>
          <View style={{ ...styles.flexbox, ...stylesBoards.boardItem }}>
            <Text style={stylesBoards.boardItemTitle}>Title</Text>
            <Text style={stylesBoards.boardItemDescription}>Description, bing bong bung bing bong</Text>
          </View>
          <View style={{ ...styles.flexbox, ...stylesBoards.boardItem }}>
            <Text style={stylesBoards.boardItemTitle}>Title</Text>
            <Text style={stylesBoards.boardItemDescription}>Description, bing bong bung bing bong</Text>
          </View>
        </ScrollView>
        <View style={{ ...styles.flexbox, ...stylesBoards.mainFooter }}>
          <Pressable style={{ ...styles.flexbox, ...stylesBoards.logoutBtn }}>
            <Text style={stylesBoards.logoutBtnText}>Logout</Text>
          </Pressable>
          <Pressable style={{ ...styles.flexbox, ...stylesBoards.addBtn }}>
            +
          </Pressable>
        </View>
      </Main>
      <Footer text="&copy; 2023" />
    </View >
  );
};