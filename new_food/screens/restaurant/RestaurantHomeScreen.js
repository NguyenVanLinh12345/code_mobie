import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useLayoutEffect } from "react";
import { useRef, useState, useEffect } from "react";
import { ArrowLeftIcon, BuildingStorefrontIcon, Cog6ToothIcon, GiftIcon, NewspaperIcon, ChatBubbleLeftEllipsisIcon, BellAlertIcon, ArchiveBoxArrowDownIcon, PowerIcon } from "react-native-heroicons/solid";
import RestaurantView from "./RestaurantView";
import RestaurantMess from './RestaurantMess';
import RestaurantReview from './RestaurantReview';
import RestaurantOrder from './RestaurantOrder';
import ResNotify from "./ResNotify";

function RestaurantHomeScreen({ route, navigation }) {
    // const { params: { id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat }, } = route;
    const [mainView, setMainView] = useState(RestaurantView);
    const [sidebarState, setSidebarState] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    const changeMainView = (newView) => {
        setMainView(newView);
        setSidebarState(false);
    }

    const logout = () => {
        navigation.navigate("Login");
    }

    return (
        <View>
            <View style={styles.buttonSideBar}>
                <TouchableOpacity
                    className="w-10 h-10 bg-blue-100 items-center justify-center rounded-full"
                    onPress={() => { setSidebarState(!sidebarState) }}
                >
                    {
                        sidebarState
                            ?
                            <ArrowLeftIcon size={20} color="#00ccbb" />
                            :
                            <Cog6ToothIcon size={20} color="gray" />
                    }
                </TouchableOpacity>
            </View>

            <View style={sidebarState ? styles.sidebar : styles.sidebarHiden}>
                <TouchableOpacity clasName='py-12' onPress={() => { changeMainView(RestaurantView) }} style={styles.item} >
                    <BuildingStorefrontIcon size={30} color="#00ccbb" />
                    <Text style={styles.itemText}>Cửa hàng của bạn</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { }} style={styles.item}>
                    <Cog6ToothIcon size={30} color="#00ccbb" />
                    <Text style={styles.itemText}>Cài đặt</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { changeMainView(RestaurantReview) }} style={styles.item}>
                    <NewspaperIcon size={30} color="#00ccbb" />
                    <Text style={styles.itemText}>Nhận xét</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { }} style={styles.item} >
                    <GiftIcon size={30} color="#00ccbb" />
                    <Text style={styles.itemText}>Ưu Đãi</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {changeMainView(<ResNotify />)}} style={styles.item} >
                    <BellAlertIcon size={30} color="#00ccbb" />
                    <Text style={styles.itemText}>Thông báo</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { changeMainView(<RestaurantOrder />) }} style={styles.item} >
                    <ArchiveBoxArrowDownIcon size={30} color="#00ccbb" />
                    <Text style={styles.itemText}>Đơn hàng</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item} onPress={() => { changeMainView(<RestaurantMess navigation={navigation} />) }}>
                    <ChatBubbleLeftEllipsisIcon size={30} color="#00ccbb" />
                    <Text style={styles.itemText}>Tin nhắn</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => logout()}
                    className="mt-4 flex-row rouded self-start p-2 rounded items-center"
                    style={{ backgroundColor: '#00CCBB' }}
                >
                    <PowerIcon size={20} color="white" />
                    <Text className='text-white text-xl ml-2'>Đăng xuất</Text>
                </TouchableOpacity>
            </View>
            {mainView}
        </View>
    );
};

export default RestaurantHomeScreen;

const styles = StyleSheet.create({
    sidebar: {
        position: 'absolute',
        top: 10,
        left: 10,
        width: 280,
        backgroundColor: '#fff',
        zIndex: 1,
        elevation: 8,
        borderRadius: 4,
        padding: 12,
        paddingTop: 50,
    },
    sidebarHiden: {
        display: "none",
    },
    buttonSideBar: {
        position: 'absolute',
        zIndex: 2,
        top: 20,
        left: 20,
    },
    item: {
        marginTop: 12,
        flexDirection: 'row',
        paddingVertical: 8,
        paddingHorizontal: 2,
        borderColor: '#00ccbb',
        borderWidth: 1,
        borderRadius: 4,

        // backgroundColor: '#00ccbb',
    },
    itemText: {
        color: '#00ccbb',
        fontSize: 20,
        marginLeft: 12,

        // color: 'white'
    }
})