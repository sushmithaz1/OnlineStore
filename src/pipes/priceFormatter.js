export const formatMoney = (price) => {

    {/**Format price to perticular format */}
    return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};