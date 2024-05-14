import { View, Text, Image, TouchableOpacity } from "react-native"
import { api } from "../../services/api"
import { useState } from "react"
import { useSelector } from "react-redux";

import { selectAuth } from "../../slices/authslide";
function ResOrderForRes({ orderId = "", orders = [], name, address, state = 1, resId }) {
    const authState = useSelector(selectAuth);
    const [thisState, setThisState] = useState(state);

    const changeState = (newState) => {
        fetch(api.reschangeStateOrder + orderId, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ state: newState })
        })
            .then(res => res.json())
            .then(data => {
                setThisState(newState);
            })
            .catch(error => console.log(error))
    }

    return (
        <View className="mt-2 bg-white p-4">
            <Text>Người nhận: {name}</Text>
            <Text>Địa chỉ: {address}</Text>

            <Text className="mt-2">Danh sách đơn đặt hàng</Text>
            <View>
                {
                    orders.map(value => (
                        <View key={value._id} className="border border-gray-600 border-1 rounded p-2 mt-1">
                            <View className="flex-row" >
                                <Image
                                    source={{ uri: value.image }}
                                    className="w-12 h-12 rounded"
                                />

                                <View className="ml-2">
                                    <Text>{value.name}</Text>
                                    <Text>Số lượng: {value.quantity}</Text>
                                    {/* <Text className="text-xs">Lưu ý: {value.description}</Text> */}

                                </View>
                            </View>


                        </View>
                    ))
                }
            </View>
            {
                state < 4
                &&
                <View className="flex-row mt-2 justify-around	">
                    {
                        thisState <= 1
                        &&
                        <TouchableOpacity className="p-1 rounded" style={{ backgroundColor: thisState === 2 ? "lightblue" : "lightgray" }} onPress={() => changeState(2)}>
                            <Text>Đã xác nhận</Text>
                        </TouchableOpacity>
                    }

                    <TouchableOpacity className="p-1 rounded" style={{ backgroundColor: thisState === 3 ? "orange" : "lightgray" }} y onPress={() => changeState(3)}>
                        <Text>Đã giao hàng</Text>
                    </TouchableOpacity>
                </View>
            }
        </View>
    )
}

export default ResOrderForRes;