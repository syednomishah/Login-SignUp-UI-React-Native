import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import LoginScreen1 from '../screens/LoginScreen1';
import SignUpScreen from '../screens/SignUpScreen';
import SignUpScreen1 from '../screens/SignUpScreen1';
import ContactUsScreen from '../screens/ContactUs';
import KYCScreen from '../screens/KycScreen';

const Stack = createNativeStackNavigator();


export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Home" options={{headerShown: true}} component={HomeScreen} />
        <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
        <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen1} />
        <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpScreen1} />
        <Stack.Screen name="ContactUs" options={{headerShown: true}} component={ContactUsScreen} />
        <Stack.Screen name="Kyc" options={{headerShown: false}} component={KYCScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}