import React from "react";
import {message} from "antd";
import {setListIvas} from "./index";


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
