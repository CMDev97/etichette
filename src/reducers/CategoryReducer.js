
const initialState = {
    list:[],
    error:false,
    loading:false
}

const CategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LIST_CATEGORY':
            return {
                ...state, list: action.values
            }
        case 'SET_LOADING_UPLOAD_IVAS':
            return {
                ...state, loading: action.value
            }
        default: return state
    }

}

export default CategoryReducer;