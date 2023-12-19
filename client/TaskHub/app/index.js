import { View, Text, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "./stylesheets/style";
import { Link } from "expo-router";

export default function IndexScreen() {
  return <View style={styles.container}>
    <Link href="/screens/loginSite" asChild>
      <Pressable>
        <Text>login</Text>
      </Pressable>
    </Link>
    <Link href="/screens/registerSite" asChild>
      <Pressable>
        <Text>register</Text>
      </Pressable>
    </Link>
    <Link href="/screens/boardSite" asChild>
      <Pressable>
        <Text>boardSite</Text>
      </Pressable>
    </Link>
    <Link href="/screens/createBoardSite" asChild>
      <Pressable>
        <Text>createBoardSite</Text>
      </Pressable>
    </Link>
  </View>;
};