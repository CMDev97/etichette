import Request from "../utils/Request";
import {message} from "antd";
import {hideDrawer, hideModal, setConfirmLoading} from "./index";

export const retriveIngredientsProduct = (dispatch, id) => {

}

export const retrieveAllIngredient = (dispatch) => {
    let request = new Request("http://localhost:8080/Gestionale_war/api/ingredienti/");
    request.methodSuccess = (result)=>{
        dispatch(setListIngredient(result));
    }
    request.fetchData().catch((error) => {
        message.error("Errore con il server");
    })
}

export const addIngredient = (dispatch, value) => {
    let request = new Request("http://localhost:8080/Gestionale_war/api/ingredienti/");
    request.methodSuccess = (result)=>{
        message.success("Salvato con successo");
        retrieveAllIngredient(dispatch);
        dispatch(hideDrawer());
    }
    request.fetchPost(JSON.stringify(value)).catch((error) => {
        message.error("Errore con il server");
    })
}

export const deleteIngredient = (dispatch, id) => {
    let request = new Request("http://localhost:8080/Gestionale_war/api/ingredienti/" + id);
    request.methodSuccess = () =>{
        dispatch(setConfirmLoading(false));
        message.success("Hai eliminato correttamente l'oggetto");
        dispatch(hideModal());
        retrieveAllIngredient(dispatch);
    }
    request.fetchDelete().catch((error)=>{
        console.log(error);
        dispatch(setConfirmLoading(false));
        message.error("Errore di connessione con il server");
    });
}

export const setListIngredient = (values) => {
    return {
        type:"SET_LIST_INGREDIENT",
        values:values
    }
}