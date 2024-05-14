import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Image } from "react-native";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAllFromBasket, selectBasketItems, selectBasketTotal } from "../slices/basketSlice";
import { TouchableOpacity } from "react-native";
import { CalendarDaysIcon, XCircleIcon, BuildingStorefrontIcon } from "react-native-heroicons/solid";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import { api } from "../services/api";
import { formatMoney } from "../services/moneyService";
import { formatDate, getDayMonthYear } from "../services/timeService";

const BasketScreen = ({ navigation }) => {
  const [timeState, setTimeState] = useState(true);

  // time là thời gian theo format chuẩn, dùng để gửi lên server
  const [time, setTime] = useState(() => {
    // Cách lấy giờ địa phương và giờ quốc tế khác nhau, do đó dẫn đến chênh nhau 7h giống ubuntu và win
    const newDate = new Date();
    newDate.setHours(newDate.getHours() + 7);
    return newDate;
  });

  // typeTime: 0 là gửi ngay, 1 là set thời gian
  const [typeTime, setTypetime] = useState(0);

  // Danh sách item lấy từ redux
  const items = useSelector(selectBasketItems);
  const [groupItemsBasket, setGroupItemsBasket] = useState([]);
  const basketTotal = useSelector(selectBasketTotal);
  const dispatch = useDispatch();

  // Đây là hàm chuyển mảng hiện tại (lưu nhiều item giống nhau) => mảng lưu item thêm thuộc tính quantity (số lượng)
  const transformArray = (inputArray) => {
    if (!inputArray) {
      console.log("Mảng rỗng inputArray");
      return [];
    }
    const resultArray = [];

    // Tạo một đối tượng để lưu trữ số lượng của mỗi id
    const idCount = {};

    // Duyệt qua từng phần tử trong mảng ban đầu
    inputArray.forEach(item => {
      // Nếu id chưa tồn tại trong idCount, khởi tạo với giá trị 1
      if (!idCount[item.id]) {
        idCount[item.id] = 1;
        // Thêm phần tử vào mảng kết quả và đặt quantity = 1
        resultArray.push({ ...item, quantity: 1 });
      } else {
        // Nếu id đã tồn tại trong idCount, tăng giá trị quantity và cập nhật lại mảng kết quả
        idCount[item.id]++;
        const existingItemIndex = resultArray.findIndex(obj => obj.id === item.id);
        resultArray[existingItemIndex].quantity = idCount[item.id];
      }
    });

    return resultArray;
  }

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupItemsBasket(groupedItems);
  }, [items]);

  const submitOrder = () => {
    // groupItemsBasket là danh sách đơn hàng

    const orderItems = transformArray(Object.values(groupItemsBasket)[0]);

    const orderData = {
      // typetime: 0 là giao ngay, 1 là giao theo thời gian
      type: typeTime,
      userId: 12345,
      userName: "Người đặt hàng",
      address: "123 Đường ABC, Quận XYZ, Thành phố HCM",

      resId: 123456,
      resName: "Quán ăn đường phố",

      phoneNumber: "0123456789",
      items: orderItems,
      orderTime: time
    }
    fetch(api.createOrder, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then(res => res.json())
      .then(data => {
        dispatch(removeAllFromBasket())
        navigation.navigate("Prepare");
        // console.log(data);

      })
      .catch(error => console.error(error))

  }

  const openChooseTimeDelivery = () => {
    setTimeState(false);
  }

  // Cái này là nút chọn giao hàng ngay hoặc không, value không có vai trò gì
  const chooseTimeDelivery = (type, value) => {
    setTypetime(type);
  }

  // type: 0 là giờ, 1 là phút
  // Set thời gian để nhận hàng
  const setDeliveryTime = (value, type) => {
    const newtime = new Date(time);
    newtime.setSeconds(0);
    if (value === "") {
      value = 0;
    }
    if (type === 0) {
      newtime.setHours(value + 7);
      setTime(newtime);
    } else if (type === 1) {
      newtime.setMinutes(value);
      setTime(newtime);
    }
  }

  return (
    <SafeAreaView className="flex-1 bg-gray relative">
      <ScrollView>

        <View style={{ backgroundColor: "rgba(0,0,0, 0.4)" }} className={`${timeState && "hidden"} absolute top-0 left-0 bottom-0 right-0 z-10 items-center justify-center`}>
          {/* Phần trắng ở giữa */}
          <View className="bg-white p-2 rounded w-64">
            {/* Đặt hàng ngay */}
            <View className={`${typeTime === 0 ? "bg-mainBlue" : "bg-white"} flex-row items-center p-2 rounded`}>
              <BuildingStorefrontIcon name="BuildingStorefrontIcon" size={20} color="#666" className="mr-5" />
              <TouchableOpacity onPress={() => chooseTimeDelivery(0, null)}>
                <Text className="ml-5">Đặt hàng ngay</Text>
              </TouchableOpacity>
            </View>

            {/* Phần chọn đặt hàng trước giờ, phút */}
            <TouchableOpacity onPress={() => chooseTimeDelivery(1, "")}>
              <View className={`${typeTime === 1 ? "bg-mainBlue" : "bg-white"} mt-2 rounded`}>
                <View className="flex-row items-center p-2">
                  <CalendarDaysIcon name="calendar-outline" size={20} color="#666" style={{ marginRight: 5 }} />
                  <Text className="ml-5">Chọn thời gian</Text>
                </View>

                <View className="flex-row p-2">
                  <View className="flex-row items-center">
                    <TextInput onChangeText={(text) => { setDeliveryTime(text, 0) }} className="bg-white border flex-row self-start text-center rounded" value={`${time.getHours()}`} />
                    <Text className="ml-2">Giờ</Text>
                  </View>

                  <View className="flex-row items-center ml-2">
                    <TextInput onChangeText={(text) => { setDeliveryTime(text, 1) }} className="bg-white border flex-row self-start text-center rounded" value={`${time.getMinutes()}`} />
                    <Text className="ml-2">Phút</Text>
                  </View>

                  <View className="flex-row items-center">
                    <Text className="ml-2 rounded border p-1">{getDayMonthYear()}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            {/* Nút chọn */}
            <View>
              <TouchableOpacity onPress={() => setTimeState(true)}>
                <Text className="bg-mainBlue rounded mt-4 text-center p-2 font-bold text-xl text-white">Chọn</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View className="flex-1 bg-gray-100">
          <View className="p-5 border-b border-[#00ccbb] bg-white shadow-sm">
            <View>
              <Text className="text-lg font-bold text-center">Đơn hàng</Text>
            </View>

            <TouchableOpacity
              onPress={() => navigation.goBack(null)}
              className="rounded-full bg-gray-100 absolute   top-3  right-2"
            >
              <XCircleIcon color="#00ccbb" height={50} width={50} />
            </TouchableOpacity>
          </View>

          <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
            <Ionicons name="fast-food" color="#2c9935" size={30} />
            <Text className="flex-1">{typeTime === 0 ? "Đặt hàng ngay" : formatDate(time)}</Text>
            <TouchableOpacity onPress={() => openChooseTimeDelivery()}>
              <Text className="text-[#00ccbb]">Thay đổi</Text>
            </TouchableOpacity>
          </View>

          {/* Đoạn hiện danh sách nhà hàng */}
          <View className="h-40">{
            Object.entries(groupItemsBasket).map(([key, items]) => (
              <View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-5">
                <Text className="text-green-600 text-md font-bold">{items.length} x</Text>

                <Image
                  source={{
                    uri: items[0].image
                  }}
                  className="h-12 w-12 rounded-full"
                />
                <Text className="flex-1">{items[0]?.name}</Text>

                <Text className="text-gray-600 text-xs line-through">{items[0]?.price}</Text>
                <Text className="text-gray-600 text-xs">{items[0]?.price - 100}</Text>

                {/* Đoạn codee này là xóa item khỏi giỏ hàng, nhưng tạm thời đang lỗi */}
                {/* <TouchableOpacity>
                  <Text
                    className="text-[#00ccbb] text-xs"
                    onPress={() => {
                      // console.log(items)
                      dispatch(removeFromBasket({ id: null }));
                    }
                    }
                  >
                    <AntDesign name="minuscircle" size={16} color="red" />
                  </Text>
                </TouchableOpacity> */}
              </View>
            ))}</View>

          <View className="mt-5 p-5 bg-white space-y-4 ">
            <View className="flex-row">
              <Text className="mr-2">Thanh toán:</Text>
              <Text>Thanh toán khi nhận hàng</Text>
            </View>

          </View>

          <View className="p-5 bg-white mt-5 space-y-4 ">
            <View className="flex-row justify-between">
              <Text className="text-gray-400">Tổng phụ</Text>
              <Text className="text-gray-400">
                {formatMoney(basketTotal)}
              </Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-gray-400">Phí giao hàng</Text>
              <Text className="text-gray-400">
                {formatMoney(15000)}
              </Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-gray-400">Giảm giá từ tích điểm</Text>
              <Text className="text-gray-400">
                {-0}
              </Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-gray-400 font-bold">Tổng</Text>
              <Text className=" text-[#1f1f20] font-extrabold">
                {formatMoney(basketTotal + 15000)}
              </Text>
            </View>

            <TouchableOpacity
              className="rounded-lg bg-[#00ccbb] p-4 shadow-xl"
              onPress={() => submitOrder()}
            >
              <Text className="text-center text-white text-lg font-bold">Đặt hàng</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BasketScreen;
