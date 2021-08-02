const jsonData = require('../dataMock/product.json');
let initialState = {
    search:"",
    products: jsonData.product
}

const ProductsReducer = (state = initialState, action)=>{
    switch (action.type){
        case 'ADD_PRODUCT':
            return {
                ...state, products: [...state.products, action.value]
            };
        case 'DELETE':
            return {
                ...state,
                products : [...state.products.removeByID(action.id)]
            };
        default: return state;
    }
}

export default ProductsReducer;