import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: themeColors.bg, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Hey there! 😄</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Kyc")} style={{ backgroundColor: 'green', padding: 10, borderRadius: 8 }}>
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Complete your KYC</Text>
      </TouchableOpacity>
      {/* Add additional content here */}
    </View>
  );
}
