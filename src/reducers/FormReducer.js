const initialState = {
    loading: false,
    error:false,
    success:false
}

export const FormReducer = (state = initialState, action) => {

    switch (action.type){
        case "LOADING_STATE":
            return {
                ...state, loading: action.value
            };
        case "PRESERVATION":
            return {
                ...state, preservation: action.value
            };
        default: return state;
    }

}