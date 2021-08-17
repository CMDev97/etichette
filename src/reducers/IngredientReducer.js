import {RETURN} from "react-bootstrap-typeahead/lib/constants";

let initialState = {
    search:"",
    ingredients: [],
    incidenze:[],
    loading:false
}

const IngredientReducer = (state = initialState, action)=>{
    switch (action.type){
        case 'SET_LIST_INGREDIENT':
            return {
                ...state, ingredients: action.values
            }
        case 'SET_LIST_INCIDENZE':
            return {
                ...state, incidenze: action.values
            }
        case 'SET_LOADING_INGREDIENT':
            return {
                ...state, loading: action.value
            }
        default: return state;
    }
}

export default IngredientReducer;