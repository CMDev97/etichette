export const SET_OBJECT = "SET_OBJECT";
export const INCREMENT_CURRENT = "INCREMENT_CURRENT";
export const DECREMENT_CURRENT = "DECREMENT_CURRENT";


export const initialState = {
    current: 0,
    objects:[]
}

export const StepsReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_OBJECT:
            if (state.objects[state.current] === null){
                let array = state.objects;
                array.push(action.value);
                return {...state, objects: array}
            }
            return {
                ...state, objects: state.objects.map(
                    (content, i) => i === state.current ? action.value
                        : content
                )
            }
        case INCREMENT_CURRENT : return {...state, current: state.current + 1}
        case DECREMENT_CURRENT : return {...state, current: state.current - 1}
        default:return state

    }
}
