import React, { useState, useEffect } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { styles } from "../stylesheets/style";
import { stylesBoards } from "../stylesheets/styleBoards";
import { Header } from "../components/header";
import { Main } from "../components/main";
import { Footer } from "../components/footer";

export default function BoardScreen() {
  const [boards, setBoards] = useState([]);
  const [emptyPrompt, setEmptyPrompt] = useState("");

  useEffect(() => {
    fetchYourBoards();
  }, []);

  const fetchYourBoards = async () => {
    try {
      const response = await fetch('Your API URL');
      const data = await response.json();
      if (data.fetchedBoards.count > 0) {
        setBoards(data.fetchedBoards.items);
      } else {
        setEmptyPrompt("Ohh it's cold in here, time to create some boards by clicking on the plus.");
      }
    } catch (error) {
      console.error("Error fetching boards:", error);
      setEmptyPrompt("Error loading boards. Please try again later.");
    }
  };

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
            <Text style={stylesBoards.logoutBtnText}>Logout</Text>
          </Pressable>
          <Pressable style={{ ...styles.flexbox, ...stylesBoards.addBtn }}>
            +
          </Pressable>
        </View>
      </Main>
      <Footer text="&copy; 2023" />
    </View>
  );
}
