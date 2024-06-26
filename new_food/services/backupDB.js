const categories = [
    {
        "id": "0",
        "image": "https://statics.vinpearl.com/mon-ngon-ha-noi-1_1679653765.png",
        "name": "Hà Nội"
    },
    {
        "id": "1",
        "image": "https://ik.imagekit.io/tvlk/blog/2022/09/dac-san-thanh-hoa-2.jpg?tr=dpr-2,w-675",
        "name": "Thanh Hóa"
    },
    {
        "id": "2",
        "image": "https://oxalisadventure.com/uploads/2021/01/dsc08987__637457225604650797.jpg",
        "name": "Quảng Bình"
    },
    {
        "id": "3",
        "image": "https://cdn.tgdd.vn/Files/2021/10/31/1394638/diem-mat-12-dac-san-bac-ninh-noi-tieng-bat-nhat-khong-the-bo-lo-202110310251375525.jpg",
        "name": "Bắc Ninh"
    },
    {
        "id": "4",
        "image": "https://statics.vinpearl.com/dac-san-da-nang-1.jpg",
        "name": "Đà Nẵng"
    },
    {
        "id": "5",
        "image": "https://cdn.tgdd.vn/Files/2021/07/01/1364712/12-mon-an-dac-san-o-nghe-an-ban-khong-the-bo-qua-202201041647014179.jpg",
        "name": "Nghệ An"
    }
]

// "resId" là id của nhà hàng (restaurant) chứa sản phẩm đó
// nhà hàng id 0 -> 3
const dishes = [
    {
        id: 0,
        "resId": 2,
        "name": "Phở",
        "short_description": "Một món ăn đặc trưng của Việt Nam, phở được làm từ bún và nước dùng thơm ngon.",
        "price": 35750,
        "image": "https://cdn.tgdd.vn/Files/2022/01/25/1412805/cach-nau-pho-bo-nam-dinh-chuan-vi-thom-ngon-nhu-hang-quan-202201250230038502.jpg"
    },
    {
        id: 1,
        "resId": 0,
        "name": "Bánh mì",
        "short_description": "Món bánh mì Việt Nam nổi tiếng với hương vị đậm đà, nguyên liệu phong phú và giá cả phải chăng.",
        "price": 23780,
        "image": "https://cdn1.tuoitre.vn/zoom/600_315/471584752817336320/2023/2/20/viet-populaire-copy-e1659353432539-1024x681-16594235658881650374369-1676888750526893807756-41-0-423-730-crop-16768887676751617090180.jpg"
    },
    {
        id: 2,
        "resId": 3,
        "name": "Bún chả",
        "short_description": "Một món ăn đặc trưng của miền Bắc, bún chả gồm có bún, chả và nước mắm chua ngọt.",
        "price": 41250,
        "image": "https://www.seriouseats.com/thmb/J0g7JWjk9r6CHESo1CIrD1BfGd0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20231204-SEA-VyTran-BunChaHanoi-19-f623913c6ef34a9185bcd6e5680c545f.jpg"
    },
    {
        id: 3,
        "resId": 1,
        "name": "Bánh xèo",
        "short_description": "Một món ăn ngon và hấp dẫn, bánh xèo có vỏ giòn và nhân ngọt béo.",
        "price": 28900,
        "image": "https://i.ytimg.com/vi/GOUmS6kRoGw/maxresdefault.jpg"
    },
    {
        id: 4,
        "resId": 2,
        "name": "Bánh cuốn",
        "short_description": "Bánh cuốn là một món ăn dân dã, được làm từ bột gạo và nhân thịt, nấm hoặc tôm.",
        "price": 37680,
        "image": "https://cdn.tgdd.vn/Files/2020/05/21/1257167/cach-lam-banh-cuon-bang-chao-chong-dinh-chi-10-phut-co-ngay-bua-sang-202208151607177009.jpg"
    },
    {
        id: 5,
        "resId": 3,
        "name": "Bún riêu",
        "short_description": "Bún riêu là một món ăn đặc trưng của miền Nam, có hương vị đậm đà và phong phú.",
        "price": 44820,
        "image": "https://static-images.vnncdn.net/files/publish/2023/4/3/bun-rieu-cua-fb-464.jpg"
    },
    {
        id: 6,
        "resId": 0,
        "name": "Bánh tráng trộn",
        "short_description": "Bánh tráng trộn là một món ăn vặt phổ biến của giới trẻ, có vị giòn ngon và đầy đặn.",
        "price": 31740,
        "image": "https://vcdn1-giadinh.vnecdn.net/2023/08/05/anhdaidien-1691221857-9943-1691221866.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=KZRGjdJmptImeOcmcXpQbw"
    },
    {
        id: 7,
        "resId": 1,
        "name": "Bún bò Huế",
        "short_description": "Bún bò Huế là một món ăn đặc trưng của Huế, có hương vị cay nồng và thơm ngon.",
        "price": 39850,
        "image": "https://i.ytimg.com/vi/A_o2qfaTgKs/maxresdefault.jpg"
    },
    {
        id: 8,
        "resId": 2,
        "name": "Cơm gà Hải Nam",
        "short_description": "Cơm gà Hải Nam là một món ăn phổ biến, có thịt gà thơm ngon và cơm dẻo.",
        "price": 47230,
        "image": "https://cdn.tgdd.vn/2022/01/CookRecipe/GalleryStep/thanh-pham.jpeg"
    },
    {
        id: 9,
        "resId": 3,
        "name": "Cà phê sữa đá",
        "short_description": "Cà phê sữa đá là một món đồ uống phổ biến của người Việt, có hương vị đậm đà và thơm ngon.",
        "price": 21900,
        "image": "https://img.tastykitchen.vn/2021/04/12/cafe-sua-1280x1000-be0b.jpg"
    },
    {
        id: 10,
        "resId": 0,
        "name": "Chả giò",
        "short_description": "Món chả giò Việt Nam nổi tiếng với vỏ giòn và nhân thịt ngọt béo.",
        "price": 32850,
        "image": "https://cdn.tgdd.vn/Files/2017/03/28/965860/cach-lam-mon-cha-gio-thom-ngon--5_760x536.jpg"
    },
    {
        id: 11,
        "resId": 1,
        "name": "Chè bưởi",
        "short_description": "Chè là một loại đồ ngọt phổ biến trong ẩm thực Việt Nam, có nhiều hương vị và nguyên liệu.",
        "price": 26900,
        "image": "https://cdn.tgdd.vn/Files/2022/11/20/1488962/cach-nau-che-buoi-sai-gon-thom-sanh-dac-gion-ngon-tai-nha-202211210039464329.jpg"
    },
    {
        id: 12,
        "resId": 2,
        "name": "Bún thịt nướng",
        "short_description": "Bún thịt nướng là một món ăn ngon và bổ dưỡng, có thịt nướng và bún giòn.",
        "price": 37900,
        "image": "https://cdn.tgdd.vn/Files/2017/03/24/964440/cach-lam-bun-thit-nuong-ngon-7_760x450.jpg"
    },
    {
        id: 13,
        "resId": 3,
        "name": "Gỏi cuốn",
        "short_description": "Gỏi cuốn là một món ăn dân dã, có nguyên liệu đa dạng và hương vị tươi ngon.",
        "price": 29480,
        "image": "https://cdn.tgdd.vn/Files/2017/03/22/963738/cach-lam-goi-cuon-tom-thit-thom-ngon-cho-bua-com-gian-don-202203021427281747.jpg"
    },
    {
        id: 14,
        "resId": 0,
        "name": "Bún đậu mắm tôm",
        "short_description": "Bún đậu mắm tôm là một món ăn dân dã, có bún, đậu nành và mắm tôm.",
        "price": 30150,
        "image": "https://cdn.tgdd.vn/Files/2021/07/02/1365019/an-bao-lau-nay-ban-co-biet-bun-dau-mam-tom-la-dac-san-o-dau-202206021309408488.jpeg"
    },
    {
        id: 15,
        "resId": 1,
        "name": "Bò lá lốt",
        "short_description": "Bò lá lốt là một món ăn ngon và lạ miệng, có thịt bò ướp và lá lốt cuộn.",
        "price": 42960,
        "image": "https://fujifoods.vn/wp-content/uploads/2021/05/bo-nuong-la-lot-1-1.jpg"
    },
    {
        id: 16,
        "resId": 2,
        "name": "Cơm tấm",
        "short_description": "Cơm tấm là một món ăn dân dã, có thịt nướng, trứng ốp la và cơm nhiều dầu mỡ.",
        "price": 34120,
        "image": "https://vcdn1-giadinh.vnecdn.net/2024/03/07/7Honthinthnhphm1-1709800144-8583-1709800424.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=yflkT1zyARjnO_PPyQYBoA"
    },
    {
        id: 17,
        "resId": 3,
        "name": "Bánh cuốn",
        "short_description": "Bánh cuốn là một món ăn ngon và độc đáo, có bột và nhân cuốn mỏng.",
        "price": 25340,
        "image": "https://cdn.buffetposeidon.com/app/media/Kham-pha-am-thuc/11.2023/241123-banh-cuon-buffet-poseidon-4.jpg"
    },
    {
        id: 18,
        "resId": 0,
        "name": "Xôi gấc",
        "short_description": "Xôi là một món ăn dân dã, có cơm nếp xanh và nhân đa dạng.",
        "price": 29380,
        "image": "https://cdn.tgdd.vn/Files/2018/06/09/1094282/cach-nau-xoi-gac-truyen-thong-deo-thom-cuc-hap-dan-tai-nha-202207051359097475.jpg"
    },
    {
        id: 19,
        "resId": 1,
        "name": "Mì Quảng",
        "short_description": "Mì Quảng là một món ăn đặc trưng của miền Trung, có nước dùng đậm đà và nhiều nguyên liệu.",
        "price": 40320,
        "image": "https://cdn.tgdd.vn/2021/02/CookProduct/1200-1200x676-16.jpg"
    }
];