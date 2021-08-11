import React from "react";
import {message} from "antd";
import {hideModal, setConfirmLoading, setListIvas} from "./index";
import Request from "../utils/Request";


export default function retrieveReparti(dispatch){
    fetch('http://localhost:8080/Gestionale_war/api/reparto')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(setListIvas(res));
            return res;
        })
        .catch(error => {
            message.error("Si è verificato un errore nello scaricare i dati!");
            console.log(error);
        })
}

export const actionDeleteReparto = (dispatch, id)=>{
    let request = new Request("http://localhost:8080/Gestionale_war/api/reparto/" + id);
    request.methodSuccess = () =>{
        dispatch(setConfirmLoading(false));
        message.success("Hai eliminato correttamente l'oggetto");
        dispatch(hideModal());
        retrieveReparti(dispatch);
    }
    request.fetchDelete().catch((error)=>{
        console.log(error);
        dispatch(setConfirmLoading(false));
        message.error("Errore di connessione con il server");
    });
}