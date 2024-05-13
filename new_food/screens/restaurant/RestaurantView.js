import { View, Text, ScrollView, Image } from "react-native";
import { MapPinIcon, StarIcon } from "react-native-heroicons/solid";
import ResDishRow from "../../components/restaurant/ResDishRow";

function RestaurantView() {
    // const { params: { id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat }, } = route;
    const imgUrl = `https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg`;
    const title = "Nhà hàng bến quê";
    const rating = 5;
    const genre = "Viet Nam food";
    const address = "Viet Nam";
    const short_description = "Đây là đồ ăn cực ngon.";
    const dishes = [
        {
            id: 0,
            name: "Bánh chưng",
            short_description: "Đây là món ăn truyền thống dịp tết",
            price: 50000,
            image: `https://cdn.tgdd.vn/Files/2021/07/26/1370911/tro-tai-lam-mon-banh-chung-chay-ngon-bo-re-don-gian-tai-nha-202206031137121323.jpg`
        }
    ];
    return (
        <>
            <ScrollView>
                <View className="relative">
                    <Image source={{ uri: imgUrl }} className="w-full h-56 bg-gray-300 p-4" />
                </View>

                <View className="bg-white">
                    <View className="px-4 pt-4">
                        <Text className="text-3xl font-bold ">{title}</Text>
                        <View className="flex-row space-x-2 my-1">
                            <View className="flex-row items-center space-x-1">
                                <StarIcon color="green" opacity={0.5} size={22} />
                                <Text className="text-xs text-gray-500">
                                    <Text className="text-green-500">
                                        {rating} . {genre}
                                    </Text>
                                </Text>
                            </View>
                            <View className="flex-row items-center space-x-1">
                                <MapPinIcon color="gray" opacity={0.5} size={22} />
                                <Text className="text-xs text-gray-500">{address}</Text>
                            </View>
                        </View>
                        <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
                    </View>
                </View>
                <View className="pb-36">
                    <Text className="px-4 pt-6 mb-3 font-bold text-xl">Danh sách món ăn nhà hàng</Text>
                    {dishes.map((dish) => (
                        <ResDishRow
                            key={dish.id}
                            id={dish.id}
                            name={dish.name}
                            description={dish.short_description}
                            price={dish.price}
                            image={dish.image}
                        />
                    ))}
                </View>
            </ScrollView>
        </>
    );
};

export default RestaurantView;
