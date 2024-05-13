import { ScrollView, Text, View } from "react-native";
import ResOrderItem from '../../components/restaurant/ResOrderItem';
import { useEffect, useState } from "react";
import { api } from "../../services/api";

function RestaurantOrder() {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(api.resGetAllOrder + "123456")
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                // console.log(data);
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return (
        <View>
            <View className="p-6 bg-white">
                <Text className="text-center text-xl font-semibold">Danh sách đơn đặt hàng</Text>
            </View>

            <View style={{ height: 500 }}>
                <ScrollView>
                    {
                        orders.map(value => (
                            <ResOrderItem orderId={value._id} state={value.state} key={value._id} name={value.userName} address={value.address} orders={value.items} />
                        ))
                    }
                </ScrollView>
            </View>
        </View>
    )
}
export default RestaurantOrder;