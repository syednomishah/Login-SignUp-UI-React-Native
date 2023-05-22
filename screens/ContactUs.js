import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';

export default function ContactUsScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: themeColors.bg, padding: 20 }}>
      <Text className="font-bold text-center text-white" style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Contact Us</Text>
      <Text className="font-bold text-white" style={{ fontSize: 18, marginBottom: 2 }}>Name:</Text>
      <TextInput
        style={{ backgroundColor: 'white', padding: 10, borderRadius: 8, marginBottom: 20 }}
        placeholder="Enter your name"
      />
      <Text className="font-bold text-white" style={{ fontSize: 18, marginBottom: 2 }}>Email:</Text>
      <TextInput
        style={{ backgroundColor: 'white', padding: 10, borderRadius: 8, marginBottom: 20 }}
        placeholder="Enter your email"
        keyboardType="email-address"
      />
      <Text className="font-bold text-white" style={{ fontSize: 18, marginBottom: 2 }}>Message:</Text>
      <TextInput
        style={{ backgroundColor: 'white', padding: 10, borderRadius: 8, marginBottom: 20, height: 150 }}
        placeholder="Enter your message"
        multiline
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={{ backgroundColor: 'green', padding: 12, borderRadius: 8, alignItems: 'center' }}
      >
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
