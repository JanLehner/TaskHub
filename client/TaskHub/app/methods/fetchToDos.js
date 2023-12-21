import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchToDos = async () => {
  try {
    const response = await fetch('http://localhost:8080/board/getAll', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': await AsyncStorage.getItem('token'),
      },
      body: JSON.stringify({
        boardName: await AsyncStorage.getItem('username'),
      })
    });
    if (response.ok) {
      const data = await response.json();
      return data.items;
    } else {
      throw new Error('Error while fetching items');
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};