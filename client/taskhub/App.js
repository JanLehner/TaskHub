import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/LoginScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} />
                {/* Hier kann man weitere Screens hinzufügen, z.B. HomeScreen */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
