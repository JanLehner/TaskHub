import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Switch, Text, StyleSheet } from 'react-native';


import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Switch, Text, StyleSheet } from 'react-native';
import FunctionButton from './FunctionButton';

const CreateBoardComponent = () => {
  const [boardName, setBoardName] = useState('');
  const [boardDescription, setBoardDescription] = useState('');
  const [isPublic, setIsPublic] = useState(false);
  const [password, setPassword] = useState('');

  const handleCreateBoard = async () => {
    try {
      const response = await fetch('https://api.taskhub.sanqro.me/board/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: boardName,
          description: boardDescription,
          public: isPublic,
          password: password,
        }),
      });

      if (response.ok) {
        const jsonResponse = await response.json();
        Alert.alert('Success', 'Board created successfully');
      } else {
        const errorResponse = await response.text();
        Alert.alert('Error', `Unable to create board: ${errorResponse}`);
      }
    } catch (error) {
      Alert.alert('Error', `Network error: ${error.message}`);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Board name"
        value={boardName}
        onChangeText={setBoardName}
      />
      <TextInput
        placeholder="Board description"
        value={boardDescription}
        onChangeText={setBoardDescription}
      />
      <View>
        <Switch
          value={isPublic}
          onValueChange={setIsPublic}
        />
        <Text>{isPublic ? 'Board is Public' : 'Board is Private'}</Text>
      </View>
      <TextInput
        placeholder="Board password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <FunctionButton
        title="Create Board"
        onPress={handleCreateBoard}
      />
    </View>
  )
};

export default CreateBoardComponent;