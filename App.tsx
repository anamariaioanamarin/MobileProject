import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import GymList from './src/screens/GymList';


const Stack = createNativeStackNavigator();
export default function App() {


  return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Login" screenOptions={{ header: () => null }}>
<Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="GymList" component={GymList} />
<Stack.Screen name="Login" component={LoginScreen} />
</Stack.Navigator>
</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});