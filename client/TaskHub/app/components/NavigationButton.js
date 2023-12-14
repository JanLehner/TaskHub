// Importiere die notwendigen Module aus React Native
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const NavigationButton = ({ navigationLink, buttonText }) => {
  return (
    < Link style={styles.button} href={navigationLink} asChild >
      <Text style={styles.buttonText}>{buttonText}</Text>
    </Link>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 10,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
  },
});

export default NavigationButton;
