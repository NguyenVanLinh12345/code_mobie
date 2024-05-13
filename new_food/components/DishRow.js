import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, selectBasketItems, removeFromBasket, } from "../slices/basketSlice";
import { formatMoney } from "../services/moneyService";

// Cái này là 1 item trong danh sách món ăn hiển thị ở trong một nhà hàng
// Đây là cái hiển thị ra món ăn của nhà hàng đó
const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);

  const dispatch = useDispatch();
  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };

  const allItems = useSelector(selectBasketItems);
  const items = allItems.filter(value => value.id === id);

  const removeItemFromBasketHandler = () => {
    if (items.length > 0) {
      dispatch(removeFromBasket({ id }));
    }
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className="bg-white border p-4 border-gray-200"
      >
        <View className="flex-row items-center space-x-1">
          <View className="flex-1  ">
            <Text className="text-lg mb-1 font-bold">{name}</Text>
            <Text className="text-gray-400 text-xs">{description}</Text>
            <Text className="text-gray-400 mt-2 line-through">{formatMoney(price)}</Text>
            <Text className="text-gray-600 mt-2 ">{formatMoney(price)}</Text>
          </View>
          <View>
            <Image source={{ uri: image, }} className="h-20 w-20 bg-gray-300 p-4 rounded-md" />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed &&
        (<View className="bg-white px-4 pt-2 ">
          <View className="flex-row items-center space-x-2 pb-3">
              <TouchableOpacity onPress={removeItemFromBasketHandler} disabled={items.length === 0}>
              <MinusCircleIcon color={items.length > 0 ? "#00ccbb" : "gray"} size={40} />
            </TouchableOpacity>
            <Text>{items.length}</Text>
            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon size={40} color="#00ccbb" />
            </TouchableOpacity>
          </View>
        </View>)}
    </View>
  );
};

export default DishRow;
