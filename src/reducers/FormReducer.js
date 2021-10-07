export const INITIAL_VALUES = "INITIAL_VALUES";

const initialState = {
    loading: false,
    error:false,
    initialValues:null,
    success:false
}

export const FormReducer = (state = initialState, action) => {

    switch (action.type){
        case "LOADING_STATE":
            return {
                ...state, loading: action.value
            };
        case INITIAL_VALUES :
            return {
                ...state, initialValues: action.value
            }
        case "PRESERVATION":
            return {
                ...state, preservation: action.value
            };
        default: return state;
    }

}
