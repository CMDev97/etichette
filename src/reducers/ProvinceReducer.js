const initialState = {
    list: [],
    loading:false
}

export const ProvinceReducer = (state = initialState, action)=>{
    switch (action.type){
        case 'SET_PROVINCE':
            return {
                ...state, list: action.values
            }
        case 'SET_LOADING_PROVINCE':
            return {
                ...state, loading: action.value
            }
        default: return state;
    }
}
