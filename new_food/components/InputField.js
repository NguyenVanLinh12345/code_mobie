import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

export default function InputField({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
  onChangeTextCallback = () => { }, // Thêm prop mới dùng để nhập
}) {
  const handleTextChange = (newText) => {
    onChangeTextCallback(newText); // Gọi hàm callback để truyền giá trị mới ra ngoài
  };



  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
      }}>
      {icon}
      {inputType == 'password' ? (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          style={{ flex: 1, paddingVertical: 0 }}
          secureTextEntry={true}
          onChangeText={handleTextChange}
        />
      ) : (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          style={{ flex: 1, paddingVertical: 0 }}
          onChangeText={handleTextChange}
        />
      )}
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text className="font-bold color-mainBlue">{fieldButtonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}
