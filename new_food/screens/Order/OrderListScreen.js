import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import ResOrderItem from '../../components/restaurant/ResOrderItem';
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { ArrowLeftIcon } from "react-native-heroicons/solid";

function OrderListScreen({ navigation }) {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(api.resGetAllOrder + "123456")
      .then(res => res.json())
      .then(data => {
        setOrders(data);
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  return (
    <View>
      {/* Nút quay lại */}
      <View className="relative p-6 bg-white">
        <TouchableOpacity
          className="absolute top-6 left-5 p-2 bg-mainBlue rounded-full"
          onPress={() => {
            console.log("ve home");
            navigation.navigate("Home")
          }}
        >
          <ArrowLeftIcon size={20} color="white" />
        </TouchableOpacity>
        <View>
          <Text className="text-center text-xl font-semibold">Danh sách đơn đặt hàng</Text>
        </View>
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
export default OrderListScreen;
