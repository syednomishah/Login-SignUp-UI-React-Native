import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import LoginScreen1 from '../screens/LoginScreen1';
import SignUpScreen from '../screens/SignUpScreen';
import SignUpScreen1 from '../screens/SignUpScreen1';
import ContactUsScreen from '../screens/ContactUs';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Home"
          options={({ navigation }) => ({
            title: 'Home',
            headerLeft: () => (
              <TouchableOpacity
                style={{ marginLeft: 16 }}
                onPress={() => navigation.openDrawer()}
              >
                <Ionicons name="menu-outline" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Welcome"
          options={{ headerShown: false }}
          component={WelcomeScreen}
        />
        <Stack.Screen
          name="Login"
          options={({ navigation }) => ({
            title: 'Login',
            headerLeft: () => (
              <TouchableOpacity
                style={{ marginLeft: 16 }}
                onPress={() => navigation.openDrawer()}
              >
                <Ionicons name="menu-outline" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
          component={LoginScreen1}
        />
        <Stack.Screen
          name="SignUp"
          options={({ navigation }) => ({
            title: 'Sign Up',
            headerLeft: () => (
              <TouchableOpacity
                style={{ marginLeft: 16 }}
                onPress={() => navigation.openDrawer()}
              >
                <Ionicons name="menu-outline" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
          component={SignUpScreen1}
        />
        <Stack.Screen
          name="ContactUs"
          options={({ navigation }) => ({
            title: 'Contact Us',
            headerLeft: () => (
              <TouchableOpacity
                style={{ marginLeft: 16 }}
                onPress={() => navigation.openDrawer()}
              >
                <Ionicons name="menu-outline" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
          component={ContactUsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
