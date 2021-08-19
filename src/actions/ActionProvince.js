import Request from "../utils/Request";
import {message} from "antd";


export const retrieveProvince = (dispatch) => {
    dispatch(setLoadingProvince(true));
    let request = new Request("http://localhost:8080/Gestionale_war/api/provincia/");
    request.methodSuccess = (json) => {
        console.log(json);
        dispatch(setListProvince(json));
        dispatch(setLoadingProvince(false));
    }
    request.fetchData().catch((error) => {
        dispatch(setLoadingProvince(false));
        message.error("Errore con il server");
    })
}

const setListProvince = (values) => {
    return {
        type:'SET_PROVINCE',
        values:values
    }
}

const setLoadingProvince = (value) => {
    return {
        type:'SET_LOADING_PROVINCE',
        values:value
    }
}