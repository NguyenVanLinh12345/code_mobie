import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { StarIcon, NewspaperIcon } from "react-native-heroicons/solid";

function ResReview({ id, name, rate, date, review, feedback }) {
    const submitFeedback = () => {
        console.log("submit");
    }

    return (
        <View>
            <View className="mb-4 bg-white border p-4 border-gray-200">
                <View>
                    <View className="mt-2 p-2 border border-gray-600 rounded">
                        <View>
                            <Text>{name}</Text>
                            <View className="flex-row">
                                <Text>{rate}</Text>
                                <StarIcon color="yellow" opacity={0.5} size={18} />
                                <Text className="ml-1 mr-1">|</Text>
                                <Text>{date}</Text>
                            </View>
                        </View>
                        <Text className="mb-2">{review}</Text>
                        {
                            feedback
                                ?
                                <View className="bg-gray-100 p-1">
                                    <Text className="font-semibold	">Phản hồi của người bán</Text>
                                    <Text>{feedback}</Text>
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
                </View>

            </View>
        </View>
    )
}

export default ResReview;