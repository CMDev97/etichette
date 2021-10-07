import {DECREMENT_CURRENT, INCREMENT_CURRENT, SET_OBJECT} from "../reducers/StepsReducer";


export const nextStep = () =>{
    return {type:INCREMENT_CURRENT};
}

export const prevStep = () =>{
    return {type:DECREMENT_CURRENT};
}

export const setObject = (value) => {
    return {type:SET_OBJECT,
        value:value}
}
