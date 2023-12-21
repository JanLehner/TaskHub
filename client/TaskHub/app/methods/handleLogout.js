import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

export const handleLogout = async () => {
  try {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('username');
    router.replace('/');
    alert("Logout successful");
  } catch (error) {
    console.error(error);
  }
};