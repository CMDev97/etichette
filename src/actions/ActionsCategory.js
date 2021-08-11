import Request from "../utils/Request";
import {message} from "antd";
import {hideDrawer, hideModal, setConfirmLoading} from "./index";
import retrieveReparti from "./ActionIvas";


export const saveCategory = (dispatch, item) => {
    let request = new Request('http://localhost:8080/Gestionale_war/api/category');
    request.methodSuccess = () => {
        message.success("L'operazione è andata a buon fine!");
        dispatch(hideDrawer());
        reloadCategory(dispatch);
    }
    request.fetchPost(JSON.stringify(item)).catch(error => {
        console.log(error);
    });
}

export const reloadCategory = (dispatch) => {
    let request = new Request('http://localhost:8080/Gestionale_war/api/category');
    request.methodSuccess = (json) => {
        console.log(json);
        dispatch(setListCategory(json));
    }
    request.fetchData().catch((error) => {
        console.log(error);
    })
}

export const actionDeleteCategory = (dispatch, id)=>{
    let request = new Request("http://localhost:8080/Gestionale_war/api/category/" + id);
    request.methodSuccess = () =>{
        dispatch(setConfirmLoading(false));
        message.success("Hai eliminato correttamente l'oggetto");
        dispatch(hideModal());
        reloadCategory(dispatch);
    }
    request.fetchDelete().catch((error)=>{
        console.log(error);
        dispatch(setConfirmLoading(false));
        message.error("Errore di connessione con il server");
    });
}


export const setListCategory = (list) => {
    return {
        type : "SET_LIST_CATEGORY",
        values:list
    }
}