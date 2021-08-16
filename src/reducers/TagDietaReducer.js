const initialState = {
    list:[],
    loading:false
}


const TagDietaReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LIST_TAG':
            return {
                ...state, list: action.values
            }
        case 'SET_LOADING_TAG':
            return {
                ...state, loading: action.value
            }
        default: return state
    }

}

export default TagDietaReducer;