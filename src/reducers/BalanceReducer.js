const initialState = {
    weight: "0.000",
    preservation: "LOW",
    product:undefined,
    idProduct:0,
    price:0,
    products:[],
    ingredients: [],
}

const BalanceReducer = (state = initialState, action) => {

    switch (action.type){
        case "UPDATE_WEIGHT":
            return {
                ...state, weight: action.value
            };
        case "PRESERVATION":
            return {
                ...state, preservation: action.value
            };
        case "PRODUCTS_WEIGHT":
            return {
                ...state, products:action.values
            }
        case "SET_PRODUCT_BALANCE":
            return {
                ...state, product:action.value
            }
        case "SET_ID_PRODUCT":
            return {
                ...state, idProduct:action.value
            }
        case "SET_PRICE_PRODUCT":
            return {
                ...state, price:action.value
            }
        default: return state;
    }

}

export default BalanceReducer;