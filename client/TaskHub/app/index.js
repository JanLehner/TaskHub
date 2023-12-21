import { View, Text, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "./stylesheets/style";
import { Link } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';

export default function IndexScreen() {
  useEffect(() => {
    const validateCredentials = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const username = await AsyncStorage.getItem('username');

        const isValid = token !== null && username !== null;

        if (isValid) {
          router.replace('/screens/boardSite');
        } else {
          router.replace('/screens/loginSite');
        }
      } catch (error) {
        console.error(error);
      }
    };

    validateCredentials();
  }, []);
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
    <Link href="/screens/itemsSite" asChild>
      <Pressable>
        <Text>itemsSite</Text>
      </Pressable>
    </Link>
    <Link href="/screens/createItemSite" asChild>
      <Pressable>
        <Text>createItemSite</Text>
      </Pressable>
    </Link>
    <Link href="/screens/updateItemSite" asChild>
      <Pressable>
        <Text>updateItemSite</Text>
      </Pressable>
    </Link>
  </View>;
};
