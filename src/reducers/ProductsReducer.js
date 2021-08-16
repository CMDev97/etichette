
let initialState = {
    search:"",
    products: [],
    item:null,
    loading:false
}

const ProductsReducer = (state = initialState, action)=>{
    switch (action.type){
        case 'SET_LIST_PRODUCT':
            return {
                ...state, products: action.values
            }
        case 'SET_PRODUCT':
            return {
                ...state, item : action.value
            }
        case 'SET_LOADING_PRODUCT':
            return {
                ...state, loading: action.value
            }
        default: return state;
    }
}

export default ProductsReducer;