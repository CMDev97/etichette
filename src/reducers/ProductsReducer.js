
let initialState = {
    search:"",
    products: [],
}

const ProductsReducer = (state = initialState, action)=>{
    switch (action.type){
        case 'SET_LIST_PRODUCT':
            return {
                ...state, products: action.values
            }
        default: return state;
    }
}

export default ProductsReducer;