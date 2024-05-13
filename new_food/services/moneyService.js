function formatMoney(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + "đ";
}


export { formatMoney };