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

  return (
    <View style={styles.container}>
      <Header text="Your boards" />
      <Main>
        <ScrollView style={stylesBoards.boardsScrollView} contentContainerStyle={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
          {boards.length === 0 && <Text style={stylesBoards.emptyPromt}>{emptyPrompt}</Text>}
          {boards.map((board, index) => (
            <View key={index} style={{ ...styles.flexbox, ...stylesBoards.boardItem }}>
              <Text style={stylesBoards.boardItemTitle}>{board.title}</Text>
              <Text style={stylesBoards.boardItemDescription}>Owner: {board.owner}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={{ ...styles.flexbox, ...stylesBoards.mainFooter }}>
          <Pressable style={{ ...styles.flexbox, ...stylesBoards.logoutBtn }}>
            <Text style={stylesBoards.logoutBtnText} onPress={() => {handleLogout()}}>Logout</Text>
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
