import {OPTION, PRESERVATION, WEIGHT} from "../reducers/BalanceFormReducer";
import printJS from "print-js";
import {Constant} from "../Constant";

export const setOption = (value) => {
    return {type:OPTION, value:value};
}

export const setWeight = (value) => {
    return {type:WEIGHT, value:value};
}

export const setPreservation = (value) => {
    return {type:PRESERVATION, value:value};
}

export const getDocument = (value) => {

    const url = Constant.urlBase + 'labels?product=' + value.product +
        "&option=" + value.option + "&weight=" + value.weight + "&pres=" + value.preservation;
    console.log(url);

    printJS({
        printable: url,
        type: 'pdf',
        onError: function  (error) {
            alert('Error found => ' + error.message)
        }
    });
}
