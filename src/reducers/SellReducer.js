const initialState = {
    categorySelected: 0,
    productVisible:[],
    page:1,
    totalPage:1
}

export const SellReducer = (state = initialState, action)=>{
    switch (action.type){
        case 'SET_CATEGORY_SELECTED':
            return {
                ...state, categorySelected: action.value
            }
        case 'SET_PRODUCT_VISIBLE':
            return {
                ...state, productVisible: action.values
            }
        case 'SET_PAGE':
            return {
                ...state, page: action.value
            }
        case 'SET_TOTAL_PAGE':
            return {
                ...state, totalPage: action.value
            }
        default: return state;
    }
}

export default SellReducer;