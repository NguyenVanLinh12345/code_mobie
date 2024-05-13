import { Text, View, Image } from "react-native";

function NotifyItem({ title, content }) {

    return (
        <View className="bg-white flex-row p-4 mb-2">
            <View>
                <Image
                    source={{ uri: "https://media.istockphoto.com/id/1344512181/vi/vec-to/bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-loa-m%C3%A0u-%C4%91%E1%BB%8F.jpg?s=612x612&w=0&k=20&c=t8xmvCQKhdqmyG2ify0vXMIgK5ty7IpOyicWE-Rrpzg=" }}
                    className="w-12 h-12 bg-gray-300" />
            </View>
            <View className="ml-2 pr-4">
                <Text className="font-bold">{title}</Text>
                <Text>{content}</Text>
            </View>

        </View>
    )
}

export default NotifyItem;