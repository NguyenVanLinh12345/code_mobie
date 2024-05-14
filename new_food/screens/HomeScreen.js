import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { TouchableOpacity, Image, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { homeSreenData } from "../services/fakedataService";
import { MagnifyingGlassIcon, AdjustmentsVerticalIcon, ShoppingCartIcon } from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

import { selectAuth } from "../slices/authslide";
import { useSelector } from "react-redux";
const HomeScreen = () => {
  // state and hooks
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);
  const authState = useSelector(selectAuth);

  // side effects
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    setFeaturedCategories(homeSreenData);
  }, []);

  return (
    <>
      <SafeAreaView className="bg-white pt-5">
        {/* header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <TouchableOpacity onPress={() => navigation.navigate("User")}>
            <Image source={{
              uri: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png",
            }} className=" h-7 w-7 bg-gray-300 p-4  rounded-full" />
          </TouchableOpacity>
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">{authState.name}</Text>
          </View>

          <ShoppingCartIcon onPress={() => {
            navigation.navigate("OrderList");
          }} size={25} color="#00CCBB" />
        </View>

        {/* search bar */}
        <View className="flex-row mx-4 items-center space-x-2 pb-2">
          <View style={{backgroundColor: '#e5e7eb'}} className="flex-row space-x-2 flex-1 bg-gray-100 p-3 rounded-md">
            <MagnifyingGlassIcon color="gray" />
            <TextInput placeholder="Tìm nhà hàng hoặc món ăn" keyboardType="default" />
          </View>
          <AdjustmentsVerticalIcon color="#00CCBB" />
        </View>

        {/* body */}
        <ScrollView className="bg-gray-100" contentContainerStyle={{ paddingBottom: 100 }}>
          {/* categories */}
          <Categories />

          {/* featured rows */}
          {featuredCategories.map((category) => (
            <FeaturedRow
              key={category.id}
              title={category.name}
              description={category.short_description}
              id={category.id}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
