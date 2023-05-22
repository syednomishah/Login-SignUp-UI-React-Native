import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';

export default function KYCScreen() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white" style={{ backgroundColor: themeColors.bg }}>
      <SafeAreaView className="flex">
        <View className="flex-row justify-center">
          <Text className="text-center text-white" style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }} >Complete Your KYC</Text>
        </View>
      </SafeAreaView>
      <View className="flex-1 bg-white px-8 pt-8"  style={{ borderTopLeftRadius: 26, borderTopRightRadius: 26 }}>
        <View className="space-y-2">
          <Text className="text-gray-700 ml-4">Name</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            placeholder="Enter your name"
          />
          <Text className="text-gray-700 ml-4">Date of Birth</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            placeholder="Select date of birth"
          />
          <Text className="text-gray-700 ml-4">Aadhaar Card Number</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            placeholder="Enter Aadhaar card number"
            keyboardType='numeric'
          />
          <Text className="text-gray-700 ml-4">PAN Card Number</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            placeholder="Enter PAN card number"
            autoCapitalize="characters"
          />
          <Text className="text-gray-700 ml-4">Nominee Name</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            placeholder="Enter nominee name"
          />
        </View>
        <TouchableOpacity className="py-3 bg-green-400 rounded-xl">
          <Text className="text-xl font-bold text-center text-white">Complete Your KYC</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
