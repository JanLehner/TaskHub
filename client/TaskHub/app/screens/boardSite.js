import React, { useState, useEffect } from "react";
import { View, Text, Pressable, ScrollView, Modal } from "react-native";
import { styles } from "../stylesheets/style";
import { stylesBoards } from "../stylesheets/styleBoards";
import { Header } from "../components/header";
import { Main } from "../components/main";
import { Footer } from "../components/footer";
import { handleLogout } from "../methods/handleLogout";
import { fetchToDos } from "../methods/fetchToDos";
import { styleItems } from "../stylesheets/styleItems";

export default function BoardScreen() {
  const [boards, setBoards] = useState([]);
  const [emptyPrompt, setEmptyPrompt] = useState("");
  const [modalBoardOpen, setModalBoardOpen] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedToDos = await fetchToDos();
      setBoards(fetchedToDos);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (boards.length == 0) {
      setEmptyPrompt("ohh it's cold in here, time to create some boards by clicking on the plus.");
    } else {
      setEmptyPrompt("");
    }
  }, [boards]);

  const openBoard = (index) => {
    setModalBoardOpen(true);
    setSelectedBoard(index);
  }

  const closeBoard = () => {
    setModalBoardOpen(false);
    setSelectedBoard();
  }

  return (
    <View style={styles.container}>
      <Header text="Your boards" />
      <Main>
        <ScrollView style={stylesBoards.boardsScrollView} contentContainerStyle={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
          <Text style={stylesBoards.emptyPromt}>{emptyPrompt}</Text>
          {boards.length > 0 &&
            boards.map((item, index) => (
              <Pressable onPress={() => openBoard(index)} key={index} style={{ ...styles.flexbox, ...stylesBoards.boardItem }}>
                <Text style={stylesBoards.boardItemTitle}>{item.key}</Text>
                <Text style={stylesBoards.boardItemDescription}>Owner: {item.owner}</Text>
              </Pressable>
            ))}
        </ScrollView>
        <View style={{ ...styles.flexbox, ...stylesBoards.mainFooter }}>
          <Pressable onPress={() => { handleLogout() }} style={{ ...styles.flexbox, ...stylesBoards.logoutBtn }}>
            <Text style={stylesBoards.logoutBtnText}>Logout</Text>
          </Pressable>
          <Pressable style={{ ...styles.flexbox, ...stylesBoards.addBtn }}>
            <Text style={{ ...styles.flexbox, ...styleItems.addBtn }}>
              +
            </Text>
          </Pressable>
        </View>
      </Main>
      <Footer text="&copy; 2023" />
      {/*--------------------------Board open modal start here/*--------------------------*/}
      <Modal visible={modalBoardOpen} animationType="slide">
        <View style={styles.container}>
          <Header text={boards[selectedBoard]?.key || 'Default Board Title'} />
          <Main>
            <View style={{ ...styles.flexbox, ...styleItems.mainHeader }}>
              <Pressable onPress={() => { closeBoard() }} style={{ ...styles.flexbox, ...styleItems.backBtn }}>
                <Text style={styleItems.logoutBtnText}>Back to the boards</Text>
              </Pressable>
            </View>
            <ScrollView style={styleItems.boardsScrollView} contentContainerStyle={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
              <Text style={styleItems.emptyPromt}></Text>
              {boards[selectedBoard]?.tasks?.length > 0 &&
                boards[selectedBoard].tasks.map((item, index) => (
                  <Pressable key={index} style={{ ...styles.flexbox, ...styleItems.item }}>
                    <Text style={styleItems.itemTitle}>{item.title}</Text>
                    <Text style={styleItems.itemDescription}>Description: {item.description}</Text>
                    <Text style={styleItems.itemDueDate}>Due till: {item.dueDate}</Text>
                  </Pressable>
                ))
              }
            </ScrollView>
            <View style={{ ...styles.flexbox, ...styleItems.mainFooter }}>
              <Pressable onPress={() => handleLogout()} style={{ ...styles.flexbox, ...styleItems.logoutBtn }}>
                <Text style={styleItems.logoutBtnText}>Logout</Text>
              </Pressable>
              <Pressable style={{ ...styles.flexbox, ...styleItems.addBtn }}>
                +
              </Pressable>
            </View>
          </Main>
          <Footer text="&copy; 2023" />
        </View >
      </Modal>
    </View>
  );
}