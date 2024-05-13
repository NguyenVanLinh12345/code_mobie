import { useEffect } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ArrowLeftIcon, StarIcon } from "react-native-heroicons/solid";
import { api } from "../../services/api";
import { useState } from "react";

// Cái này là danh sách reiew của nhà hàng, được người dùng xem
function ListReview({ navigation, route }) {
    const [reviews, setReviews] = useState([]);
    const resId = route.params?.resId;
    // console.log(resId);

    useEffect(() => {
        fetch(api.getReviewsByRestaurantId + "123456")
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setReviews(data);
            })
            .catch(error => console.log(error))
    })
    // const reviews = [
    //     {
    //         id: 1,
    //         name: "Nguyễn Thành Công",
    //         rate: 5,
    //         date: "2023-12-03 13:41",
    //         review: "Hàng Giao nhanh đủ, Shop thân thiện. Đóng gói cẩn thận. Đã kiểm 20 pin không bị nứt vỡ cái nào. Hy vọng dòng sẽ đúng như giới thiệu. Khi nào lắp đặt xong sẽ thông tin thêm cho mọi người cùng trải nghiệm.",
    //         feedback: "Cám ơn b đã phản hồi tích cực cho shop ạ. Rất vui về sự hài lòng của b",
    //         resId: 1,
    //     },
    //     {
    //         id: 2,
    //         name: "Nguyễn Chiến Thắng",
    //         rate: 5,
    //         date: "2023-12-03 13:41",
    //         review: "Hàng Giao nhanh đủ, Shop thân thiện. Đóng gói cẩn thận. Đã kiểm 20 pin không bị nứt vỡ cái nào. Hy vọng dòng sẽ đúng như giới thiệu. Khi nào lắp đặt xong sẽ thông tin thêm cho mọi người cùng trải nghiệm.",
    //         feedback: "",
    //         resId: 1,
    //     }
    // ]
    return (
        <View className="relative">
            <TouchableOpacity
                className="absolute top-8 left-5 p-2 bg-white rounded-full"
                onPress={() => navigation.goBack(null)}
            >
                <ArrowLeftIcon size={20} color="#00ccbb" />
            </TouchableOpacity>

            <View className='mt-20 h-full'>
                <ScrollView>
                    <View>
                        {
                            reviews.map(value => (
                                <View key={value._id} className="ml-2 mr-2 mt-2 p-2 bg-white rounded">
                                    <View>
                                        <Text>{value.name}</Text>
                                        <View className="flex-row">
                                            <Text>{value.rate}</Text>
                                            <StarIcon color="yellow" opacity={0.5} size={18} />
                                            <Text className="ml-1 mr-1">|</Text>
                                            <Text>{value.date}</Text>
                                        </View>
                                    </View>
                                    <Text className="mb-2">{value.review}</Text>
                                    {
                                        value.feedback &&
                                        <View className="bg-gray-100 p-1">
                                            <Text className="font-semibold	">Phản hồi của người bán</Text>
                                            <Text>{value.feedback}</Text>
                                        </View>
                                    }

                                </View>
                            ))
                        }
                    </View>
                </ScrollView>
            </View >
        </View >
    )
};

export default ListReview;