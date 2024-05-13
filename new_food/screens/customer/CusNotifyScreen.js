const { View, Text, ScrollView, TouchableOpacity } = require("react-native");
import { useEffect, useState } from "react";
import NotifyItem from '../../components/NofifyItem';
import { api } from '../../services/api';
import { ArrowLeftIcon } from "react-native-heroicons/solid";

function CusNotifyScreen({ navigation }) {
    const [notifys, setNotifys] = useState([]);

    useEffect(() => {
        fetch(api.cusGetNotify)
            .then(res => res.json())
            .then(data => {
                setNotifys(data);
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <View className="relative mt-4">
            <TouchableOpacity
                className="absolute top-4 left-5 p-2 bg-white rounded-full"
                onPress={() => navigation.goBack(null)}
            >
                <ArrowLeftIcon size={20} color="#00ccbb" />
            </TouchableOpacity>
            <Text className="text-center text-xl font-bold">Thông báo khách hàng</Text>
            <View className="mt-8 h-full">
                <ScrollView>
                    {
                        notifys.map(value => (
                            <NotifyItem key={value._id} title={value.title} content={value.content} />
                        ))
                    }
                </ScrollView>
            </View>

        </View>
    )
};
export default CusNotifyScreen;