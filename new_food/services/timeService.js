function formatDate(inputDate) {
    if (inputDate === null) {
        return "Giữ liệu trống";
    }
    // Tạo một đối tượng Date từ chuỗi đầu vào
    let date = new Date(inputDate);

    // Lấy thông tin giờ, phút, ngày, tháng và năm
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let day = date.getDate();
    let month = date.getMonth() + 1; // Tháng bắt đầu từ 0, cần cộng thêm 1
    let year = date.getFullYear();

    // Trả về chuỗi đã được định dạng
    return hours + " giờ, " + minutes + " phút, ngày " + day + "/" + month + "/" + year;
};

function getDayMonthYear() {
    // Tạo một đối tượng Date từ chuỗi đầu vào
    let date = new Date();

    // Lấy thông tin giờ, phút, ngày, tháng và năm
    let day = date.getDate();
    let month = date.getMonth() + 1; // Tháng bắt đầu từ 0, cần cộng thêm 1
    let year = date.getFullYear();

    // Trả về chuỗi đã được định dạng
    return day + "/" + month + "/" + year;
}

export { formatDate, getDayMonthYear }