// typeId là cái để chọn 1 trong 4 loại nhà hàng ở trang home
const restaurants = [
    {
        id: 0,
        typeId: 0,
        address: "Cầu Giấy - Hà Nội",
        image: "https://cdn.justfly.vn/400x300/media/202106/09/1623228927-nha-hang-buffet-hai-san-cuu-van-long-dich-vong-cau-giay.jpg",
        lat: 41.125073,
        long: -73.450036,
        name: "Bufet Cầu Giấy",
        rating: 5,
        short_description: "Ở đây có mọi loại thức ăn",
        type: {
            name: "Buffet"
        }
    },
    {
        "id": "1",
        typeId: 1,
        "address": "Hoàng Mai - Hà Nội",
        "image": "https://ticotravel.com.vn/wp-content/uploads/2021/06/2020-10-27.png",
        "lat": 41.087356,
        "long": -73.862273,
        "name": "Nhà hàng SeaFood",
        "rating": 5,
        "short_description": "Nhà hàng chuyên đồ biển và đồ ăn sáng",
        "type": {
            "name": "Hải sản"
        }
    },
    {
        "id": "2",
        typeId: 2,
        "address": "Hà Đông - Hà Nội",
        "image": "https://cdn.alongwalk.info/vn/wp-content/uploads/2022/04/12003441/image-review-5-quan-buffet-hai-san-cau-giay-nhieu-mon-ngon-gia-cuc-hoi-164967328168681.jpg",
        "lat": 41.018325,
        "long": -73.629756,
        "name": "Đồ nướng Hà Đông",
        "rating": 4,
        "short_description": "Một nhà hàng chuyên món ăn Trung Quốc",
        "type": {
            "name": "Chinese "
        }
    },
    {
        "id": "3",
        typeId: 3,
        "address": "Sơn Tây - Hà Nội",
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/16/9c/81/e7/nha-hang-phuc-thanh-han.jpg",
        "lat": 41.018325,
        "long": -73.629756,
        "name": "Nhà hàng Phúc thành",
        "rating": 4,
        "short_description": "Nơi lưu giữ tinh hoa ẩm thực",
        "type": {
            "name": "Bữa tối"
        }
    },
    {
        "id": "4",
        typeId: 0,
        "address": "Sơn Tây - Hà Nội",
        "image": "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_680/v1653635339/blog/ezdyz9svzbalnx2dlu9v.jpg",
        "lat": 41.018325,
        "long": -73.629756,
        "name": "Nhà hàng Nét Huế",
        "rating": 4,
        "short_description": "Nơi lưu giữ tinh hoa ẩm thực",
        "type": {
            "name": "Bữa tối"
        }
    },
    {
        "id": "5",
        typeId: 1,
        "address": "Sơn Tây - Hà Nội",
        "image": "https://cdn.tgdd.vn/Files/2021/06/24/1363040/cac-mon-ngon-ha-noi-phai-thu-cac-quan-an-ha-noi-phai-ghe-202209271044261080.jpg",
        "lat": 41.018325,
        "long": -73.629756,
        "name": "Nhà hàng Sản",
        "rating": 4,
        "short_description": "Nơi lưu giữ tinh hoa ẩm thực",
        "type": {
            "name": "Bữa tối"
        }
    },
    {
        "id": "6",
        typeId: 2,
        "address": "Sơn Tây - Hà Nội",
        "image": "https://statics.vincom.com.vn/xu-huong/0-nha-hang-ha-noi/2bff06e16f1e8940d00f.jpeg",
        "lat": 41.018325,
        "long": -73.629756,
        "name": "Nhà hàng VietStreet",
        "rating": 4,
        "short_description": "Nơi lưu giữ tinh hoa ẩm thực",
        "type": {
            "name": "Bữa tối"
        }
    },
    {
        "id": "7",
        typeId: 3,
        "address": "Sơn Tây - Hà Nội",
        "image": "https://haisanpho.vn/wp-content/uploads/2023/10/khong-gian-nha-hang-hai-san-sang-trong-o-ha-noi-01.jpg",
        "lat": 41.018325,
        "long": -73.629756,
        "name": "Nhà hàng hải sản phố",
        "rating": 4,
        "short_description": "Nơi lưu giữ tinh hoa ẩm thực",
        "type": {
            "name": "Bữa tối"
        }
    },
    {
        "id": "8",
        typeId: 3,
        "address": "Sơn Tây - Hà Nội",
        "image": "https://amthucvanho.com.vn/wp-content/uploads/2020/08/top-nha-hang-an-ngon-o-ha-noi5.jpg",
        "lat": 41.018325,
        "long": -73.629756,
        "name": "Lẩu dê Nhất Ly",
        "rating": 4,
        "short_description": "Chuyên Lẩu dê và các loại lẩu",
        "type": {
            "name": "Lẩu"
        }
    },
    {
        "id": "9",
        typeId: 0,
        "address": "Sơn Tây - Hà Nội",
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/17/1d/ee/aa/getlstd-property-photo.jpg",
        "lat": 41.018325,
        "long": -73.629756,
        "name": "Nhà hàng Việt Phố",
        "rating": 4,
        "short_description": "Nơi lưu giữ tinh hoa ẩm thực",
        "type": {
            "name": "Bữa ăn Việt"
        }
    },

]

const homeSreenData = [
    {
        "id": 0,
        "name": "Nếm thử sự khác biệt",
        "restaurants": restaurants,
        "short_description": "Ngon, tươi, độc đáo, thơm ngon, chất lượng."
    },
    {
        "id": 1,
        "name": "Vụ nổ hương vị",
        "restaurants": restaurants,
        "short_description": "Sôi động, mãnh liệt, kích thích, rực rỡ, rực rỡ."
    },
    {
        "id": 2,
        "name": "Quán ăn gần bạn",
        "restaurants": restaurants,
        "short_description": "Hãy chọn một nhà hàng xung quanh."
    },
    {
        "id": 3,
        "name": "Thỏa mãn cơn thèm của bạn",
        "restaurants": restaurants,
        "short_description": "Ngon miệng, đa dạng, thơm ngon, kem, giòn."
    }
]

export { homeSreenData, restaurants };
