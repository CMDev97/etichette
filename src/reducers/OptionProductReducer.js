let initialState = {
    search:"",
    list:[],
    loading:false
}

export const OptionProductReducer = (state = initialState, action)=>{
    switch (action.type){
        case 'SET_LIST_OPTION':
            return {
                ...state, list: action.values
            }
        case 'SET_LOADING_OPTION':
            return {
                ...state, loading : action.value
            }
        default: return state;
    }
}