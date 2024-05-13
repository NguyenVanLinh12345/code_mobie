import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { StarIcon, NewspaperIcon } from "react-native-heroicons/solid";
import { api } from "../../services/api";
import { useState } from "react";

function ResReview({ id, name, rate, date, review, feedback }) {
    const [myFeedback, setMyFeedback] = useState(feedback ? feedback : "");
    const [isFeedback, setIsFeedback] = useState(feedback ? true : false);

    const submitFeedback = () => {
        const dataSend = {
            feedback: myFeedback
        }
        fetch(api.addFeedbackToReview + id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataSend)
        })
            .then(res => res.json())
            .then(data => {
                setIsFeedback(true);
            })
            .catch(error => console.log(error))
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
                            isFeedback
                                ?
                                <View className="bg-gray-100 p-1">
                                    <Text className="font-semibold	">Phản hồi của người bán</Text>
                                    <Text>{myFeedback}</Text>
                                </View>
                                :
                                <View className="bg-gray-100 p-1">
                                    <TextInput
                                        style={{ backgroundColor: "lightgray" }}
                                        className="h-12 pl-2 no-underline rounded"
                                        underlineColorAndroid="transparent"
                                        placeholder="Điền phản hồi"
                                        placeholderTextColor="grey"
                                        numberOfLines={10}
                                        multiline={true}
                                        value={myFeedback}
                                        onChangeText={(text) => setMyFeedback(text)}
                                    />
                                    <View className="flex-row justify-end mt-2">
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