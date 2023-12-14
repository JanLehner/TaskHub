import { View, Text, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "./stylesheets/style";
import { Link } from "expo-router";

export default function IndexScreen() {
  return <View style={styles.container}>
    <Link href="/loginSite" asChild>
      <Pressable>
        <Text>List</Text>
      </Pressable>
    </Link>
  </View>;
};