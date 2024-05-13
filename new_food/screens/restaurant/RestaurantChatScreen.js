import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from "react-native";
import { ArrowLeftIcon, PaperAirplaneIcon } from "react-native-heroicons/solid";

function RestaurantChatScreen({ navigation, route }) {
    const { idRoom } = route.params;
    const myId = 1;
    const [listChat, setListChat] = useState([]);
    const scrollViewRef = useRef();

    // console.log("idRoom", idRoom);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    useEffect(() => {
        const demoList = [
            {
                id: 0,
                userId: 0,
                content: "Nhớ rằng các đối tượng được gửi qua navigation params cần phải là các giá trị có thể được serialize, ví dụ: các đối tượng JavaScript hoặc các kiểu dữ liệu cơ bản như số, chuỗi, mảng, hoặc đối tượng. Đối tượng không thể serialize như hàm không thể được gửi qua navigation params."
            },
            {
                id: 1,
                userId: 1,
                content: "Nhớ rằng các đối tượng được gửi qua navigation params cần phải là các giá trị có thể được serialize, ví dụ: các đối tượng JavaScript hoặc các kiểu dữ liệu cơ bản như số, chuỗi, mảng, hoặc đối tượng. Đối tượng không thể serialize như hàm không thể được gửi qua navigation params."
            },
            {
                id: 2,
                userId: 0,
                content: "Nhớ rằng các đối tượng được gửi qua navigation params cần phải là các giá trị có thể được serialize, ví dụ: các đối tượng JavaScript hoặc các kiểu dữ liệu cơ bản như số, chuỗi, mảng, hoặc đối tượng. Đối tượng không thể serialize như hàm không thể được gửi qua navigation params."
            },
        ];
        setListChat(demoList);
    }, [])

    const [message, setMessage] = useState("");
    const sendMessage = () => {
        if (message) {
            const newChat = {
                id: 3,
                userId: 1,
                content: message
            };
            setListChat([...listChat, newChat]);
            setMessage("");
        }
    }

    return (
        <View>
            <View className="p-4 bg-white">
                <TouchableOpacity
                    className="w-10 h-10 bg-blue-100 items-center justify-center rounded-full"
                    onPress={() => { navigation.goBack(null) }}
                >
                    <ArrowLeftIcon size={20} color="#00ccbb" />
                </TouchableOpacity>
            </View>
            <View style={styles.chatScroll}>
                <ScrollView
                    ref={scrollViewRef}
                    onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
                >
                    {
                        listChat.map(value => (
                            <View key={value.id} className={`mt-4 pl-4 pr-4 flex-row ${value.userId === myId ? "justify-end" : "justify-start"}`}>
                                <Text className={`p-2 bg-green-200 w-60 rounded ${value.userId !== myId && "bg-white"}`}>{value.content}</Text>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>

            <View className="bg-white flex-row p-4">
                <TextInput
                    className="flex-1"
                    style={styles.input}
                    placeholder="Nhập tin nhắn..."
                    value={message}
                    onChangeText={(text) => { setMessage(text) }}
                    onSubmitEditing={sendMessage}
                />
                <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                    <PaperAirplaneIcon size={24} color={message ? "blue" : "gray"} />
                </TouchableOpacity>
            </View>
        </View>
    )
};
export default RestaurantChatScreen;

const styles = StyleSheet.create({
    chatScroll: {
        height: 460,
        paddingBottom: 20
    }
})