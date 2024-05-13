const machineIP = "192.168.2.14";
const orderBaseAPI = `http://${machineIP}:5003`;
const productBaseAPI = `http://${machineIP}:5002`;

const api = {
    // order
    createOrder: `${orderBaseAPI}/api/v1/add-order`,
    reschangeStateOrder: `${orderBaseAPI}/api/v1/orders/state?orderId=`,
    resGetAllOrder: `${orderBaseAPI}/api/v1/get-all-order?resId=`,

    // category và món ăn
    getAllCategory: `${productBaseAPI}/api/v1/categories`,
    getDishFromResId: `${productBaseAPI}/api/v1/restaurants/dishes?resId=`



}
export { api }