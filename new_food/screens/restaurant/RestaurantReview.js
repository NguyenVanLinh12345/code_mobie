import { Text, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ResReview from '../../components/restaurant/ResReview';

function RestaurantReview() {
    const dishes = [
        {
            id: 0,
            name: "Bánh chưng",
            short_description: "Hình vuông tượng trưng cho đất",
            price: 50.000,
            image: `https://cdn.tgdd.vn/Files/2021/07/26/1370911/tro-tai-lam-mon-banh-chung-chay-ngon-bo-re-don-gian-tai-nha-202206031137121323.jpg`,
            reviews: [
                {
                    id: 1,
                    name: "Nguyễn Thành Công",
                    rate: 5,
                    date: "2023-12-03 13:41",
                    review: "Hàng Giao nhanh đủ, Shop thân thiện. Đóng gói cẩn thận. Đã kiểm 20 pin không bị nứt vỡ cái nào. Hy vọng dòng sẽ đúng như giới thiệu. Khi nào lắp đặt xong sẽ thông tin thêm cho mọi người cùng trải nghiệm.",
                    feedback: "Cám ơn b đã phản hồi tích cực cho shop ạ. Rất vui về sự hài lòng của b",
                },
                {
                    id: 2,
                    name: "Nguyễn Chiến Thắng",
                    rate: 5,
                    date: "2023-12-03 13:41",
                    review: "Hàng Giao nhanh đủ, Shop thân thiện. Đóng gói cẩn thận. Đã kiểm 20 pin không bị nứt vỡ cái nào. Hy vọng dòng sẽ đúng như giới thiệu. Khi nào lắp đặt xong sẽ thông tin thêm cho mọi người cùng trải nghiệm.",
                    feedback: "",
                }
            ]
        },
        {
            id: 1,
            name: "Bánh Dày",
            short_description: "Hình tròn tượng trưng cho đất",
            price: 50.000,
            image: `https://upload.wikimedia.org/wikipedia/commons/c/c2/B%C3%A1nh_gi%E1%BA%A7y_gi%C3%B2_2.jpg`,
            reviews: []
        }
    ];

    return (
        <View style={styles.RestaurantReview}>
            <ScrollView>
                <View className="pb-36">
                    <Text className="px-4 pt-6 mb-3 font-bold text-xl">Danh sách nhận xét</Text>
                    {dishes.map((dish) => (
                        <ResReview
                            key={dish.id}
                            id={dish.id}
                            name={dish.name}
                            description={dish.short_description}
                            price={dish.price}
                            image={dish.image}
                            reviews={dish.reviews}
                        />
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}

export default RestaurantReview;

const styles = StyleSheet.create({
    RestaurantReview:{
        marginTop: 30,
    }
})