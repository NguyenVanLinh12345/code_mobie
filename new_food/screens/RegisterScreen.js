import { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import { ArrowLeftIcon, AtSymbolIcon, CalendarDaysIcon, LockClosedIcon, UserIcon } from "react-native-heroicons/solid";
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';

function RegisterScreen({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [dobLabel, setDobLabel] = useState('Ngày sinh');

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

          <CustomButton label={'Đăng ký'} onPress={() => { }} />

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
