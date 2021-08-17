let initialState = {
    search:"",
    ingredients: [],
    loading:false
}

const IngredientReducer = (state = initialState, action)=>{
    switch (action.type){
        case 'SET_LIST_INGREDIENT':
            return {
                ...state, ingredients: action.values
            }
        case 'SET_LOADING_INGREDIENT':
            return {
                ...state, loading: action.value
            }
        default: return state;
    }
}

export default IngredientReducer;