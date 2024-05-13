import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { StarIcon, NewspaperIcon } from "react-native-heroicons/solid";

function ResReview({ id, name, description, price, image, reviews = [] }) {
    const submitFeedback = () => {
        console.log("submit");
    }

    return (
        <View>
            <View className="mb-4 bg-white border p-4 border-gray-200">
                <View className="flex-row items-center space-x-1">
                    <View className="flex-1  ">
                        <Text className="text-lg mb-1 font-bold">{name}</Text>
                        <Text className="text-gray-400 text-xs">{description}</Text>
                        <Text className="text-gray-400 mt-2 line-through">{price}VND</Text>
                        <Text className="text-gray-600 mt-2 ">{price}VND</Text>
                    </View>
                    <View>
                        <Image
                            style={{
                                borderWidth: 1,
                                borderColor: "#f3f3f4",
                            }}
                            source={{
                                uri: image,
                            }}
                            className="h-20 w-20 bg-gray-300 p-4 rounded-md"
                        />
                    </View>
                </View>

                <View>
                    {
                        reviews.map(value => (
                            <View key={value.id} className="mt-2 p-2 border border-gray-600 rounded">
                                <View>
                                    <Text>{value.name}</Text>
                                    <View className="flex-row">
                                        <Text>{value.rate}</Text>
                                        <StarIcon color="yellow" opacity={0.5} size={18} />
                                        <Text className="ml-1 mr-1">|</Text>
                                        <Text>{value.date}</Text>
                                    </View>
                                </View>
                                <Text className="mb-2">{value.review}</Text>
                                {
                                    value.feedback
                                        ?
                                        <View className="bg-gray-100 p-1">
                                            <Text className="font-semibold	">Phản hồi của người bán</Text>
                                            <Text>{value.feedback}</Text>
                                        </View>
                                        :
                                        <View className="bg-gray-100 p-1">
                                            <TextInput
                                                className="h-12 pl-2 no-underline"
                                                underlineColorAndroid="transparent"
                                                placeholder="Điền nhận xét"
                                                placeholderTextColor="grey"
                                                numberOfLines={10}
                                                multiline={true}
                                            />
                                            <View className="flex-row justify-end">
                                                <TouchableOpacity onPress={() => { submitFeedback() }}>
                                                    <View className="p-2 border border-bray-100 w-28">
                                                        <Text className="font-semibold">Thêm phản hồi</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                }
                            </View>
                        ))
                    }
                </View>

            </View>
        </View>
    )
}

export default ResReview;