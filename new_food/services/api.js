const machineIP = "10.20.108.104";

const gatewayBaseAPI = `http://${machineIP}:8000`;
const reviewBaseAPI = `http://${machineIP}:5001`;
const productBaseAPI = `http://${machineIP}:5002`;
const orderBaseAPI = `http://${machineIP}:5003`;
const notifyBaseAPI = `http://${machineIP}:5004`;

const api = {
    // login
    login: `${gatewayBaseAPI}/api/v1/login`,
    register: `${gatewayBaseAPI}/api/v1/register`,
    // order
    createOrder: `${orderBaseAPI}/api/v1/add-order`,
    reschangeStateOrder: `${orderBaseAPI}/api/v1/orders/state?orderId=`,
    resGetAllOrder: `${orderBaseAPI}/api/v1/get-all-order?resId=`,

    // category và món ăn
    getAllCategory: `${productBaseAPI}/api/v1/categories`,
    getDishFromResId: `${productBaseAPI}/api/v1/restaurants/dishes?resId=`,

    // chức năng review
    getReviewsByRestaurantId: `${reviewBaseAPI}/api/v1/reviews?resId=`,
    addReview: `${reviewBaseAPI}/api/v1/reviews`,
    addFeedbackToReview: `${reviewBaseAPI}/api/v1/reviews/feedback?reviewId=`,

    // Chức năng thông báo
    resGetNotify: `${notifyBaseAPI}/api/v1/notifies/resId/6666`,
    cusGetNotify: `${notifyBaseAPI}/api/v1/notifies/cusId/8888`
}
export { api }