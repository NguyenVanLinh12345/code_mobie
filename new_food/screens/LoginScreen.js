import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { AtSymbolIcon, LockClosedIcon } from "react-native-heroicons/solid";
import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAuth } from "../slices/authslide";
import { api } from '../services/api';
// import { useDispatch, useSelector } from "react-redux";
// import { setAuth, selectAuth } from "../slices/authslide";


// Trong React Navigation, các component được chuyển đến trong navigation stack sẽ 
// tự động nhận được hai prop quan trọng là route và navigation
function LoginScreen({ route, navigation }) {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("");

    // const authState = useSelector(selectAuth);
    const dispatch = useDispatch();

    const loginFunc = () => {
        const dataSend = {
            email: email,
            password: pass
        }
        // console.log(dataSend, api.login)
        fetch(api.login, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataSend)
        })
            .then(res => res.json())
            .then(data => {
                const dataRes = {
                    id: data.id,
                    name: data.last_name,
                    accessToken: data.access_token,
                    refreshToken: data.refresh_token
                }
                dispatch(setAuth(dataRes));
                if (data.role === "customer") {
                    navigation.navigate("Home");
                } else {
                    navigation.navigate("RestaurantHome");
                }
            })
            .catch(error => console.log(error))


        // if (email === "0") {
        //     navigation.navigate("RestaurantHome");
        // } else if (email === "1") {
        //     navigation.navigate("Home");
        // }
    }

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ paddingHorizontal: 25 }}>
                <Text
                    className="text-center text-2xl font-bold"
                >
                    Đăng nhập
                </Text>

                <InputField
                    label={'Email'}
                    fieldButtonFunction={() => console.log("xin chao")}
                    onChangeTextCallback={setEmail}
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
                    fieldButtonLabel={"Quên MK?"}
                    fieldButtonFunction={() => { }}
                />

                <CustomButton label={"Đăng nhập"} onPress={() => loginFunc()} />

                <View className="flex-row justify-center mb-4"                    >
                    <Text>Chưa có tài khoản?</Text>
                    <TouchableOpacity className="ml-1" onPress={() => navigation.navigate('Register')}>
                        <Text className="font-bold color-mainBlue">Đăng ký</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginBottom: 16,
                    }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('RestaurantRegister')}
                    >
                        <Text className="font-bold color-mainBlue">Tạo tài khoản bán hàng</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen;