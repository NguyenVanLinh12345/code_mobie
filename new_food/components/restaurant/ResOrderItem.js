import { View, Text, Image, TouchableOpacity } from "react-native"
import { api } from "../../services/api"
import { useState } from "react"
import { TextInput } from "react-native-gesture-handler";
import { StarIcon } from "react-native-heroicons/solid";

function ResOrderItem({ orderId = "", orders = [], name, address, state = 1, resId }) {
    // state = 4;
    const [myState, setMyState] = useState(state);
    const [review, setReview] = useState("");
    const [rate, setRate] = useState(5);
    const [reviewSuccess, setReviewSuccess] = useState(state === 6);

    const changeState = (newState) => {
        fetch(api.reschangeStateOrder + orderId, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ state: newState })
        })
    }

    const getOrderState = () => {
        if (state === 0) return "Đơn hàng đặt trước";
        if (state === 1) return "Đang xử lý";
        if (state === 2) return "Đã xác nhận";
        if (state === 3) return "Đã giao hàng";
        if (state === 4) return "Đã nhận được hàng";
        if (state === 5) return "Đã hủy";
        return "Không xác định"
    }

    const sendReview = () => {
        const reivewSend = {
            name: "Nguyễn Thành Công",
            rate: rate,
            date: new Date(),
            review: review,
            resId: resId
        }

        fetch(api.addReview, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reivewSend)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setReviewSuccess(true);
                changeState(6); // Đặt trạng thái là đã nhận xét
            })
            .catch(error => console.log(error))
    }

    return (
        <View className="mt-2 bg-white p-4">
            <View style={{ backgroundColor: "orange" }} className="bg-orange-500 p-1 rounded">
                <Text className="text-white">{getOrderState()}</Text>
            </View>

            <Text>Người nhận: {name}</Text>
            <Text>Địa chỉ: {address}</Text>

            <Text className="mt-2">Danh sách mặt hàng</Text>
            <View>
                {
                    orders.map(value => (
                        <View key={value._id} className="flex-row border border-gray-600 border-1 rounded p-2 mt-1">
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
                    ))
                }
            </View>
            <View className="mt-4">
                <View className="mb-2 flex-row">
                    <Text>Số sao | </Text>
                    <TouchableOpacity onPress={() => setRate(1)}>
                        <StarIcon color={rate > 0 ? "orange" : "gray"} size={18} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setRate(2)}>
                        <StarIcon color={rate > 1 ? "orange" : "gray"} size={18} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setRate(3)}>
                        <StarIcon color={rate > 2 ? "orange" : "gray"} size={18} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setRate(4)}>
                        <StarIcon color={rate > 3 ? "orange" : "gray"} size={18} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setRate(5)}>
                        <StarIcon color={rate > 4 ? "orange" : "gray"} size={18} />
                    </TouchableOpacity>
                </View>
                {
                    reviewSuccess
                        ?
                        <View></View>
                        :
                        <View>
                            <TextInput
                                placeholder="Nhận xét"
                                className="bg-gray-100 p-2 rounded"
                                value={review}
                                onChangeText={(text) => setReview(text)} />
                            <TouchableOpacity
                                onPress={() => sendReview()}
                                className="mt-2 bg-mainBlue flex-row self-end p-2 rounded">
                                <Text className="text-white font-bold">Nhận xét</Text>
                            </TouchableOpacity>
                        </View>
                }
            </View>
        </View>
    )
}

export default ResOrderItem;