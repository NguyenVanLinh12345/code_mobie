import { Text, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ResReview from '../../components/restaurant/ResReview';
import { useState } from "react";
import { useEffect } from "react";
// Đây là nơi mà người bán sẽ phản hồi người dùng
function RestaurantReview() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch()
    }, [])
    // const reviews = [
    //     {
    //         _id: 1,
    //         name: "Nguyễn Thành Công",
    //         rate: 5,
    //         date: "2023-12-03 13:41",
    //         review: "Hàng Giao nhanh đủ, Shop thân thiện. Đóng gói cẩn thận. Đã kiểm 20 pin không bị nứt vỡ cái nào. Hy vọng dòng sẽ đúng như giới thiệu. Khi nào lắp đặt xong sẽ thông tin thêm cho mọi người cùng trải nghiệm.",
    //         feedback: "Cám ơn b đã phản hồi tích cực cho shop ạ. Rất vui về sự hài lòng của b",
    //     },
    //     {
    //         _id: 2,
    //         name: "Nguyễn Chiến Thắng",
    //         rate: 5,
    //         date: "2023-12-03 13:41",
    //         review: "Hàng Giao nhanh đủ, Shop thân thiện. Đóng gói cẩn thận. Đã kiểm 20 pin không bị nứt vỡ cái nào. Hy vọng dòng sẽ đúng như giới thiệu. Khi nào lắp đặt xong sẽ thông tin thêm cho mọi người cùng trải nghiệm.",
    //         feedback: "",
    //     }
    // ]

    return (
        <View style={styles.RestaurantReview}>
            <ScrollView>
                <View className="pb-36">
                    <Text className="text-center px-4 pt-6 mb-3 font-bold text-xl">Danh sách nhận xét</Text>
                    {
                        reviews.map((review) => (
                            <ResReview
                                date={review.date}
                                feedback={review.feedback}
                                id={review._id}
                                name={review.name}
                                rate={review.rate}
                                review={review.review}
                                key={review._id}
                            />
                        ))}
                </View>
            </ScrollView>
        </View>
    )
}

export default RestaurantReview;

const styles = StyleSheet.create({
    RestaurantReview: {
        marginTop: 30,
    }
})