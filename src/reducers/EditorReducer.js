const initialState = {
    weight: 0.000,
    preservation: "LOW",
    idProduct:0
}

const EditorReducer = (state = initialState, action) => {

    switch (action.type){
        case "UPDATE_WEIGHT":
            return {
                ...state, weight: action.value
            };
        case "PRESERVATION":
            return {
                ...state, preservation: action.value
            };
        default: return state;
    }

}

export default EditorReducer;