import { View, Text, ScrollView, Image, TouchableOpacity, Modal } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { ArrowLeftIcon, ChatBubbleOvalLeftEllipsisIcon, CheckBadgeIcon, LinkIcon, MapPinIcon, ShareIcon, StarIcon, TagIcon, XMarkIcon, } from "react-native-heroicons/solid";
import DishRow from "../components/DishRow";
import BasketContainer from "../components/BasketContainer";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../slices/restaurantSlice";
import { api } from "../services/api";
// import { dishes } from "../services/fakedataService";

const RestaurantScreen = ({ route, navigation }) => {
  const { params: { id, imgUrl, title, rating, genre, address, short_description, long, lat } } = route;
  const dispatch = useDispatch();
  const [dishes, setDishes] = useState([]);
  useEffect(()=>{
    fetch(api.getDishFromResId + 4)
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      setDishes(data)
    })
    .catch(error => console.log(error))
  }, []);   

  useEffect(() => {
    dispatch(setRestaurant({ id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat, }));
  }, [dispatch]);
  const [isModal, setIsModal] = useState(false);

  return (
    <>
      <BasketContainer />
      <ScrollView>
        <View className="relative">
          <Image source={{ uri: imgUrl }} className="w-full h-56 bg-gray-300 p-4" />
          <View className="absolute right-4 p-2 top-14 bg-white rounded-full">
            <TouchableOpacity
              onPress={() => { setIsModal(true) }}>
              <ShareIcon
                size={20} color="#00ccbb"
              />
            </TouchableOpacity>
          </View>

          <View className="absolute right-28 p-2 top-14 bg-white rounded-full">
            <TouchableOpacity onPress={() => { navigation.navigate("ListReview", { resId: id }) }}>
              <CheckBadgeIcon size={20} color="#00ccbb" />
            </TouchableOpacity>
          </View>

          <View className="absolute right-16 p-2 top-14 bg-white rounded-full">
            <TouchableOpacity onPress={() => { navigation.navigate("CustomerChat", { idRoom: 1, restaurantName: title }) }}>
              <ChatBubbleOvalLeftEllipsisIcon size={20} color="#00ccbb" />
            </TouchableOpacity>
          </View>


          <TouchableOpacity
            className="absolute top-14 left-5 p-2 bg-white rounded-full"
            onPress={() => navigation.goBack(null)}
          >
            <ArrowLeftIcon size={20} color="#00ccbb" />
          </TouchableOpacity>
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
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Thực đơn</Text>
          {dishes.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>
      </ScrollView>
      <Modal
        visible={isModal}
        onRequestClose={() => setIsModal(false)}
        animationType='slide'
        transparent={true}>
        <View
          style={{
            flex: 1,
            marginBottom: 0,
            justifyContent: 'flex-end',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)'
          }}
        >

          <View
            style={{
              backgroundColor: 'white',
              justifyContent: 'flex-end',
              padding: 22,
              width: '100%',
              height: 300,
              borderRadius: 10,
            }}
          >
            <View className="absolute right-4 p-2 top-2 bg-white rounded-full">
              <TouchableOpacity
                onPress={() => { setIsModal(false) }}>
                <XMarkIcon
                  size={25} color="#00ccbb"
                />
              </TouchableOpacity>
            </View>
            <View className='absolute p-3 top-2 '>
              <Text className='font-bold text-lg '>Chia sẻ với bạn bè và gia đình</Text>
            </View>
            <View className='absolute top-20 ' style={{ flex: 1, height: 1, width: '100%', backgroundColor: 'black' }} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 30,
              }}>

              <TouchableOpacity
                onPress={() => { }}
                style={{ alignItems: 'center' }}
              >
                <Image
                  source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png',
                  }}
                  style={{ width: 30, height: 30 }} />
                <Text>facebook</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => { }}
                style={{ alignItems: 'center' }}
              >
                <TagIcon size={30} color='black' />
                <Text>sao chép thông tin</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => { }}
                style={{

                }}
              >
                <View style={{ alignItems: 'center' }}>
                  <LinkIcon size={30} color='black' />
                  <Text >sao chép đường dẫn</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </Modal>
    </>
  );
};

export default RestaurantScreen;

 // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerShown: false,
  //   });
  // }, []);