import { Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native";

function RestaurantMess({ navigation }) {
    const listMess = [
        {
            id: 1,
            image: "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/hinh-dep.jpg",
            name: "Nguyễn Thành Công",
            lastMess: "Tin nhắn mới"
        },
        {
            id: 2,
            image: "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/hinh-dep-5.jpg",
            name: "Nguyễn Chiến Thắng",
            lastMess: "Ừ mình thấy cái áo đó cũng đẹp, nhưng mà chắc thôi mình ko mua nữa"
        }
    ]

    const moveToChatRoom = (idRoom) => {
        navigation.navigate("RestaurantChat", { idRoom });
    }

    return (

        <View>
            <View className="p-6 bg-white">
                <Text className="text-2xl text-center">Tin nhắn</Text>
            </View>

            <View>
                {listMess.map(value => (
                    <TouchableOpacity onPress={() => moveToChatRoom(value.id)} key={value.id}>
                        <View className="mt-1 flex-row p-4 bg-white">
                            <Image
                                source={{
                                    uri: value.image,
                                }}
                                className=" h-12 w-12 bg-gray-300 p-4  rounded-full"
                            />
                            <View className="ml-2">
                                <Text className="font-medium">{value.name}</Text>
                                <Text className="text-gray-400 text-xs w-64">{value.lastMess}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

export default RestaurantMess;