import { View, Text, Image } from "react-native";
import { formatMoney } from '../../services/moneyService'

// Cái này là ở trong một nhà hàng
// Đây là cái hiển thị ra món ăn của nhà hàng đó
function ResDishRow({ id, name, description, price, image }) {
    return (
        <View className="bg-white border p-4 border-gray-200">
            <View className="flex-row items-center space-x-1">
                <View className="flex-1  ">
                    <Text className="text-lg mb-1 font-bold">{name}</Text>
                    <Text className="text-gray-400 text-xs">{description}</Text>
                    <Text className="text-gray-400 mt-1 line-through text-red-400 text-xs">{formatMoney(price)}</Text>
                    <Text className="text-gray-600">{formatMoney(price)}</Text>
                </View>
                <View>
                    <Image
                        style={{
                            borderWidth: 1,
                            borderColor: "#f3f3f4",
                        }}
                        source={{
                            // uri: urlFor(image).url() "https://cdn.tgdd.vn/Files/2021/07/26/1370911/tro-tai-lam-mon-banh-chung-chay-ngon-bo-re-don-gian-tai-nha-202206031137121323.jpg",
                            uri: image,
                        }}
                        className="h-20 w-20 bg-gray-300 p-4 rounded-md"
                    />
                </View>
            </View>
        </View>
    );
};

export default ResDishRow;
