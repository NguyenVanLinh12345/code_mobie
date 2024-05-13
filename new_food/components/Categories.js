import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
// import { categories as fakedb } from "../services/fakedataService";
import { api } from "../services/api";
// Đây là cái danh sách category nằm ở ngay dưới ô tìm kiếm
function Categories() {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    fetch(api.getAllCategory)
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      setCategories(data);
    })
    .catch(error => console.log(error))
    // setCategories(fakedb);
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {/* categories Card */}
      {categories.map((category) => (
        <CategoryCard
        key={category._id}
          imgUrl={category.image}
          title={category.name}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
