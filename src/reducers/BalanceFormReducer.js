export const WEIGHT = "WEIGHT";
export const PRESERVATION = "PRESERVATION";
export const OPTION = "OPTION";


const initialState = {
    weight: "0.000",
    preservation: 1,
    option: null,
    product:null,
}

const BalanceFormReducer = (state = initialState, action) => {

    switch (action.type){
        case WEIGHT:
            return {
                ...state, weight: action.value
            };
        case PRESERVATION:
            return {
                ...state, preservation: action.value
            };
        case OPTION:
            return {
                ...state, option:action.value
            }
        default: return state;
    }

}

export default BalanceFormReducer;
