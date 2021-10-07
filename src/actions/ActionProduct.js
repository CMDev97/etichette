import Request from "../utils/Request";
import {hideDrawer, hideModal, setConfirmLoading, setLoadingForm} from "./index";
import {message} from "antd";
import {Constant} from "../Constant";

const path = Constant.urlBase + Constant.product + "/";

export const addProduct = (dispatch, value, action) => {
    dispatch(setLoadingForm(true));
    let request = new Request(path);
    request.methodSuccess = (json) => {
        message.success('Caricato!');
        dispatch(setLoadingForm(false));
        dispatch(hideDrawer());
        console.log(value);
        if (value.id !== 0){
            action(dispatch, value.id);
        } else {
            action(dispatch);
        }
    }
    request.fetchPost(JSON.stringify(value)).catch(() => {
        dispatch(setLoadingForm(false));
    });
}

export const getProduct = (action, id) => {
    let request = new Request(path + id);
    request.methodSuccess = (json) => {
        action(json);
    }
    request.fetchData().catch((error) => {
        console.log(error);
    })
}

export const fetchData = (url, action) =>{
    let request = new Request(Constant.urlBase + url);
    request.methodSuccess = (json)=>{
        action(json);
    }
    request.fetchData().catch((error) => {
        message.error("Errore richiesta con il server");
    })

}

export const reloadProduct = (dispatch) => {
    let request = new Request(path);
    request.methodSuccess = (json) => {
        dispatch(setListProduct(json));
    }
    request.fetchData().catch((error) => {
        console.log(error);
    })
}

export const togglePrefer = (dispatch, id) => {
    dispatch(setLoadingProduct(true));
    let request = new Request(path + 'prefer/' + id);
    request.methodSuccess = (json) => {
        dispatch(setDetailProduct(json));
        dispatch(setLoadingProduct(false));
    }
    request.fetchData().catch((error) => {
        console.log(error);
    })
}

export const deleteProduct = (dispatch, id)=>{
    let request = new Request(path + id);
    request.methodSuccess = () =>{
        dispatch(setConfirmLoading(false));
        message.success("Hai eliminato correttamente l'oggetto");
        dispatch(hideModal());
        reloadProduct(dispatch)
    }
    request.fetchDelete().catch((error)=>{
        console.log(error);
        dispatch(setConfirmLoading(false));
        message.error("Errore di connessione con il server");
    });
}

export const setDetailProduct = (value)=>{
    return {
        type:'SET_PRODUCT',
        value:value
    }
}

export const  setLoadingProduct = (value) => {
    return {
        type:'SET_LOADING_PRODUCT',
        value:value
    }
}

export const setListProduct = (values) => {
    return {
        type:'SET_LIST_PRODUCT',
        values:values
    }
}
