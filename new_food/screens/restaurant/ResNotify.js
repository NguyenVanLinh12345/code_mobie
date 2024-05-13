const { View, Text, ScrollView } = require("react-native");
import { useEffect, useState } from "react";
import NotifyItem from "../../components/NofifyItem";
import {api} from '../../services/api';

function ResNotify({ navigation }) {
    const [notifys, setNotifys] = useState([]);

    useEffect(()=>{
        fetch(api.resGetNotify)
        .then(res => res.json())
        .then(data => {
            setNotifys(data);
        })
        .catch(error => console.log(error))
    }, [])

    return (
        <View className="mt-4">
            <Text className="text-center text-xl font-bold">Thông báo</Text>
            <View className="mt-8 h-full">
                <ScrollView>
                    {
                        notifys.map(value => (
                            <NotifyItem key={value._id} title={value.title} content={value.content}/>
                        ))
                    }
                </ScrollView>
            </View>

        </View>
    )
};
export default ResNotify