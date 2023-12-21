import React, { useState, useEffect } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { styles } from "../stylesheets/style";
import { stylesBoards } from "../stylesheets/styleBoards";
import { Header } from "../components/header";
import { Main } from "../components/main";
import { Footer } from "../components/footer";
import { handleLogout } from "../methods/handleLogout";
import { fetchToDos } from "../methods/fetchToDos";

export default function BoardScreen() {
  const [boards, setBoards] = useState([]);
  const [emptyPrompt, setEmptyPrompt] = useState("");

  useEffect(() => {
    setBoards(fetchToDos());
  }, []);

  useEffect(() => {
    if (boards == []) {
      setEmptyPrompt("ohh it's cold in here, time to create some boards by clicking on the plus.");
    } else {
      setEmptyPrompt("");
    }
  }, [boards]);

  return (
    <View style={styles.container}>
      <Header text="Your boards" />
      <Main>
        <ScrollView style={stylesBoards.boardsScrollView} contentContainerStyle={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
          <Text>{emptyPrompt}</Text>
          {boards.length > 0 &&
            boards.map((item, index) => (
              <Pressable key={index} style={{ ...styles.flexbox, ...stylesBoards.boardItem }}>
                <Text style={stylesBoards.boardItemTitle}>{item.key}</Text>
                <Text style={stylesBoards.boardItemDescription}>Owner: {item.owner}</Text>
              </Pressable>
            ))}
        </ScrollView>
        <View style={{ ...styles.flexbox, ...stylesBoards.mainFooter }}>
          <Pressable style={{ ...styles.flexbox, ...stylesBoards.logoutBtn }}>
            <Text style={stylesBoards.logoutBtnText} onPress={() => { handleLogout() }}>Logout</Text>
          </Pressable>
          <Pressable style={{ ...styles.flexbox, ...stylesBoards.addBtn }}>
            <Text style={stylesBoards.addBtnText}>
              +
            </Text>
          </Pressable>
        </View>
      </Main>
      <Footer text="&copy; 2023" />
    </View>
  );
}
