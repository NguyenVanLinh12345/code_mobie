import { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import { AtSymbolIcon, LockClosedIcon, UserIcon } from "react-native-heroicons/solid";
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import { api } from '../services/api';

function RegisterScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirm, SetConfirm] = useState("");

  const registerFunc = () => {
    const dataSend = {
      email: email,
      first_name: "",
      last_name: name,
      password: pass,
      role: "customer"
    }
    fetch(api.register, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataSend)
    })
      .then(res => res.json())
      .then(data => {
        navigation.navigate("Login");
      })
      .catch(error => console.log(error))

  }

  return (
    <>
      <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingHorizontal: 25 }}>

          <Text
            style={{
              textAlign: "center",
              fontSize: 28,
              fontWeight: '500',
              color: '#333',
              marginTop: 36,
              marginBottom: 24
            }}>
            Đăng ký
          </Text>

          <InputField
            onChangeTextCallback={setName}

            label={'Họ và tên'}
            icon={
              <UserIcon
                name="person-outline"
                size={20}
                color="#666"
                style={{ marginRight: 5 }}
              />
            }
          />

          <InputField
            onChangeTextCallback={setEmail}
            label={'Email'}
            icon={
              <AtSymbolIcon
                name="alternate-email"
                size={20}
                color="#666"
                style={{ marginRight: 5 }}
              />
            }
            keyboardType="email-address"
          />

          <InputField
            onChangeTextCallback={setPass}
            label={'Mật khẩu'}
            icon={
              <LockClosedIcon
                name="ios-lock-closed-outline"
                size={20}
                color="#666"
                style={{ marginRight: 5 }}
              />
            }
            inputType="password"
          />

          <InputField
            onChangeTextCallback={SetConfirm}
            label={'Nhâp lại mật khẩu'}
            icon={
              <LockClosedIcon
                name="ios-lock-closed-outline"
                size={20}
                color="#666"
                style={{ marginRight: 5 }}
              />
            }
            inputType="password"
          />

          <CustomButton label={'Đăng ký'} onPress={registerFunc} />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 30,
            }}>
            <Text>Đã có tài khoản?</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text className="font-bold color-mainBlue ml-1">Đăng nhập</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default RegisterScreen;
