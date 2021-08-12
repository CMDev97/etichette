import Request from "../utils/Request";
import {hideDrawer, hideModal, setConfirmLoading, setLoadingForm} from "./index";
import {message} from "antd";


export const addProduct = (dispatch, value) => {
    dispatch(setLoadingForm(true));
    let request = new Request('http://localhost:8080/Gestionale_war/api/prodotto');
    request.methodSuccess = (json) => {
        message.success('Caricato!');
        dispatch(setLoadingForm(false));
        dispatch(hideDrawer());
        reloadProduct(dispatch);
    }
    request.fetchPost(value).catch((error) => {
        dispatch(setLoadingForm(false));
    });
}


export const reloadProduct = (dispatch) => {
    let request = new Request('http://localhost:8080/Gestionale_war/api/prodotto');
    request.methodSuccess = (json) => {
        dispatch(setListProduct(json));
    }
    request.fetchData().catch((error) => {
        console.log(error);
    })
}

export const deleteProduct = (dispatch, id)=>{
    let request = new Request("http://localhost:8080/Gestionale_war/api/prodotto/" + id);
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

export const setListProduct = (values) => {
    return {
        type:'SET_LIST_PRODUCT',
        values:values
    }
}