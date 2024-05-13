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
        // console.log(data[0].resId)
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
          className="absolute top-6 left-5"
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <View className="p-2 bg-mainBlue rounded-full">
            <ArrowLeftIcon size={20} color="white" />
          </View>
        </TouchableOpacity>
        <View>
          <Text className="text-center text-xl font-semibold">Danh sách đơn đặt hàng</Text>
        </View>
      </View>


      <View style={{ height: 500 }}>
        <ScrollView>
          {
            orders.map(value => (
              <ResOrderItem resId={value.resId} orderId={value._id} state={value.state} key={value._id} name={value.userName} address={value.address} orders={value.items} />
            ))
          }
        </ScrollView>
      </View>
    </View>
  )
}
export default OrderListScreen;
