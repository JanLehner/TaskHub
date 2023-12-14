
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import NavigationButton from '../components/NavigationButton';

const AddBoardScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Add a board</Text>
      </View>
      <View style={styles.buttonContainer}>
        <NavigationButton buttonText="Create board" navigationLink="screens/CreateBoardScreen" />
        <NavigationButton buttonText="Add a public board" navigationLink="screens/loginSite" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  headerContainer: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddBoardScreen;