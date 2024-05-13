import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon, HeartIcon, CurrencyDollarIcon, GiftIcon, MapPinIcon, PowerIcon, QuestionMarkCircleIcon } from "react-native-heroicons/solid";

import { useDispatch, useSelector } from "react-redux";
import { setAuth, selectAuth } from "../slices/authslide";

const UserprofileScreen = ({ route, navigation }) => {
    const authState = useSelector(selectAuth);
    const dispatch = useDispatch();
    const logout = () => {
        const dataReset = {
            id: null,
            name: "",
            accessToken: null,
            refreshToken: null
        }

        dispatch(setAuth(dataReset));
        navigation.navigate("Login");

    }

    return (
        <SafeAreaView className="bg-white relative h-full">
            <View className='p-5 bg-white '>
                <View className='flex-row items-center py-5' >
                    <Image
                        source={{
                            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png',
                        }}
                        className=" h-20 w-20 rounded-full"
                    />
                    <View>
                        <Text className='text-xl font-bold text-gray-800 mb-2'>{authState.name}</Text>
                        <Text className='text-sm text-gray-400 bg-opacity-25'>Khách hàng</Text>
                    </View>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate("OrderList")} style={{ marginTop: 20, flexDirection: 'row' }} >
                    <GiftIcon size={30} color="gray" />
                    <Text className='text-black-700  font-light text-xl'>Đơn hàng</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { }} style={{ marginTop: 25, flexDirection: 'row' }}>
                    <CurrencyDollarIcon size={30} color="gray" />
                    <Text className='text-black-700  font-light text-xl' >Xu tích lũy</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ marginTop: 25, flexDirection: 'row' }} onPress={() => { }}>
                    <MapPinIcon size={30} color="gray" />
                    <Text className='text-black-700  font-light text-xl'>Địa chỉ</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ marginTop: 25, flexDirection: 'row' }} onPress={() => { navigation.navigate("PeriodicDish") }}>
                    <HeartIcon size={30} color="orange" />
                    <Text className='text-black-700  font-light text-xl'>Món ăn định kỳ</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ marginTop: 25, flexDirection: 'row' }} onPress={() => { }}>
                    <QuestionMarkCircleIcon size={30} color="gray" />
                    <Text className='text-black-700  font-light text-xl'>Trợ giúp</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                className="absolute top-6 left-5 p-2 bg-gray-100 rounded-full"
                onPress={() => navigation.goBack(null)}
            >
                <ArrowLeftIcon size={20} color="#00ccbb" />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => logout()}
                className="absolute bottom-6 left-5 flex-row rouded self-start p-2 rounded items-center"
                style={{ backgroundColor: '#00CCBB' }}
            >
                <PowerIcon size={20} color="white" />
                <Text className='text-white text-xl ml-2'>Đăng xuất</Text>
            </TouchableOpacity>
        </SafeAreaView >
    );
};
export default UserprofileScreen;