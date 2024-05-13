import { Text, TouchableOpacity } from 'react-native';
import React from 'react';

export default function CustomButton({ label, onPress }) {
  return (
    <TouchableOpacity className="bg-mainBlue p-4 rounded mb-8" onPress={onPress}    >
      <Text className="text-white font-bold text-xl text-center">{label}</Text>
    </TouchableOpacity>
  );
}
