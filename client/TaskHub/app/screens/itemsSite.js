import { View, Text, Pressable, TextInput, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "../stylesheets/style";
import { styleItems } from "../stylesheets/styleItems";
import { Header } from "../components/header";
import { Main } from "../components/main";
import { Footer } from "../components/footer";

export default function ItemScreen() {
  const [isEmptyPromptVisible, UpdateIsEmptyPromptVisible] = useState(true);
  const [emptyPromt, UpdateEmptypromt] = useState("ohh it's cold in here, time to create some items by clicking on the plus.")

  useEffect(() => {
    if (isEmptyPromptVisible == true) {
      UpdateEmptypromt("ohh it's cold in here, time to create some items by clicking on the plus.");
    } else {
      UpdateEmptypromt("");
    }
  }, [isEmptyPromptVisible]);

  console.log(emptyPromt);
  return (
    <View style={styles.container}>
      <Header text="{Board title here}" />
      <Main>
        <View style={{ ...styles.flexbox, ...styleItems.mainHeader }}>
          <Pressable style={{ ...styles.flexbox, ...styleItems.backBtn }}>
            <Text style={styleItems.logoutBtnText}>Back to the boards</Text>
          </Pressable>
        </View>
        <ScrollView style={styleItems.boardsScrollView} contentContainerStyle={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
          <Text style={styleItems.emptyPromt}>{emptyPromt}</Text>
          <Pressable style={{ ...styles.flexbox, ...styleItems.item }}>
            <Text style={styleItems.itemTitle}>"Hier Titel"</Text>
            <Text style={styleItems.itemDescription}>Description: "Hier kommt die lange und gute Beschreibung eines Items hin."</Text>
            <Text  style={styleItems.itemDueDate}>Due till: "Hier due date"</Text>
          </Pressable>
        </ScrollView>
        <View style={{ ...styles.flexbox, ...styleItems.mainFooter }}>
          <Pressable style={{ ...styles.flexbox, ...styleItems.logoutBtn }}>
            <Text style={styleItems.logoutBtnText}>Logout</Text>
          </Pressable>
          <Pressable style={{ ...styles.flexbox, ...styleItems.addBtn }}>
            +
          </Pressable>
        </View>
      </Main>
      <Footer text="&copy; 2023" />
    </View >
  );
};