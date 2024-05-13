import { useState } from "react";
import { Text, View, TouchableOpacity, ScrollView, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { ArrowLeftIcon, CalendarDaysIcon, TrashIcon } from "react-native-heroicons/solid";

function PeriodicDishScreen({ navigation, route }) {
    // Cái typyChoose này là dùng để xác nhận chọn hàng ngày, thứ 2 hàng tuần,... khi select box hiện lên
    const [typeChoose, setTypeChoose] = useState(null);
    // Cái typeChooseState này dùng để quyết định selectbox có bị hidden không, true là bị hidden, false là hiện
    const [typeChooseState, setTypeChooseState] = useState(true);

    const [valueChoose, setValueChoose] = useState({
        hour: 0,
        minute: 0,
        type: null,
        typeName: "Không chọn"
    });
    const listTime = [
        {
            id: 0,
            type: "Hằng ngày"
        },
        {
            id: 1,
            type: "Thứ 2 hàng tuần"
        },
        {
            id: 2,
            type: "Thứ 3 hàng tuần"
        },
        {
            id: 3,
            type: "Thứ 4 hàng tuần"
        },
        {
            id: 4,
            type: "Thứ 5 hàng tuần"
        },
        {
            id: 5,
            type: "Thứ 6 hàng tuần"
        },
        {
            id: 6,
            type: "Thứ 7 hàng tuần"
        },
        {
            id: 7,
            type: "Chủ nhật hàng tuần"
        },
    ]

    const chooseType = (newType) => {
        const newValue = listTime.find(value => value.id === newType);
        setValueChoose({ ...valueChoose, type: newValue.id, typeName: newValue.type });
        setTypeChoose(newType);
    }

    const deleteTime = () => {
        setValueChoose({ hour: 0, minute: 0, type: null, typeName: "Không chọn" });
        setTypeChooseState(true);
    }

    const confirmTime = () => {
        setTypeChooseState(true);

    }

    const changeHour = (newHour) => {
        setValueChoose({ ...valueChoose, hour: newHour });
    }

    const changeMinute = (newMinute) => {
        setValueChoose({ ...valueChoose, minute: newMinute });
    }

    const deleteDish = (idDish) => {

    }

    const listDish = [
        {
            id: 0,
            quantity: 1,
            name: "Bún đậu mắm tôm",
            image: "https://giadinh.mediacdn.vn/296230595582509056/2022/12/21/an-gi-102-16715878746102005998080.jpg"
        },
        {
            id: 1,
            quantity: 1,
            name: "Ốc nhồi",
            image: "https://giadinh.mediacdn.vn/296230595582509056/2022/12/21/an-gi-102-16715878746102005998080.jpg"
        }
    ]

    return (
        <View className="relative h-full">
            {/* Nút thoát */}
            <View className="mt-4 ml-4">
                <TouchableOpacity
                    className="w-10 h-10 bg-blue-100 items-center justify-center rounded-full"
                    onPress={() => { navigation.goBack(null) }}
                >
                    <ArrowLeftIcon size={20} color="#00ccbb" />
                </TouchableOpacity>

            </View>

            {/* Header */}
            <View className="bg-white p-2 mt-2">
                <View className="flex-row justify-center mt-2 mb-2 items-center">
                    <Text className="w-8 border p-1 rounded mr-1 ml-2 flex-row self-start color-gray text-center">{valueChoose.hour}</Text>
                    <Text>Giờ</Text>
                    <Text className="w-8 border p-1 rounded mr-1 ml-2 flex-row self-start color-gray text-center">{valueChoose.minute}</Text>
                    <Text>Phút</Text>
                    <Text className="border p-1 rounded mr-1 ml-2 flex-row self-start color-gray text-center">{valueChoose.typeName}</Text>
                    <TouchableOpacity onPress={() => setTypeChooseState(false)}>
                        <View className="flex-row bg-blue-100 p-1 rounded border border-mainBlue">
                            <CalendarDaysIcon name="calendar-outline" size={20} color="#666" style={{ marginRight: 5 }} />
                            <Text>Thay đổi</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            {/* ChooseBox */}
            <View className={`${typeChooseState && "hidden"} z-10 bg-black/40 absolute top-0 left-0 bottom-0 right-0 items-center justify-center`}>
                <View className="bg-white p-2 rounded">
                    <Text className="text-center font-bold">Chọn thời gian</Text>
                    {/* Đây là chọn giờ, phút */}
                    <View className="flex-row justify-center mt-2 mb-2 items-center">
                        <TextInput
                            onChangeText={(value) => changeHour(value)}
                            className="border p-1 rounded mr-1 ml-2 flex-row self-start color-gray text-center"
                            keyboardType='numeric'
                            value={`${valueChoose.hour}`} />
                        <Text>Giờ</Text>
                        <TextInput
                            onChangeText={(value) => changeMinute(value)}
                            className="border p-1 rounded mr-1 ml-2 flex-row self-start color-gray text-center"
                            keyboardType='numeric'
                            value={`${valueChoose.minute}`} />
                        <Text>Phút</Text>
                    </View>

                    {/* Đây là đoạn chọn ngày */}
                    <View className="h-40 w-56">
                        <ScrollView>
                            {
                                listTime.map(value => (
                                    <TouchableOpacity key={value.id} onPress={() => { chooseType(value.id) }}>
                                        <Text className={`mt-2 rounded pt-1 pb-1 pl-1 ${value.id === typeChoose ? "bg-mainBlue text-white" : ""}`}>{value.type}</Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </ScrollView>
                    </View>

                    <View className="mt-2 flex-row justify-between">
                        <View className="bg-red-100 rounded border border-red-600 flex-row self-start">
                            <TouchableOpacity onPress={() => { deleteTime() }}>
                                <Text className="font-bold text-red-600 p-2">Xóa lịch</Text>
                            </TouchableOpacity>
                        </View>

                        <View className="bg-blue-100 rounded border border-mainBlue flex-row self-end">
                            <TouchableOpacity onPress={() => { confirmTime() }}>
                                <Text className="font-bold text-mainBlue p-2">Xác nhận</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </View>

            {/* Body */}
            <View className="flex-1">
                <ScrollView>
                    {
                        listDish.map(value => (
                            <View key={value.id} className="flex-row bg-white mt-2 p-2 relative">
                                <Image className="w-12 h-12 rounded" source={{ uri: value.image }} />
                                <View className="ml-4">
                                    <Text>{value.name}</Text>
                                    <Text>Số lượng: {value.quantity}</Text>
                                </View>

                                <View className="w-8 h-8 justify-center items-center bg-red-100 rounded absolute right-2 top-4">
                                    <TouchableOpacity onPress={() => deleteDish(value.id)}>
                                        <TrashIcon size={20} color={"red"} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        </View>
    )
};

export default PeriodicDishScreen;