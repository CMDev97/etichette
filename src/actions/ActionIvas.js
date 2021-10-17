import {message} from "antd";
import {setListIvas} from "./index";
import {Constant} from "../Constant";


const path = Constant.urlBase + Constant.iva + "/";

export default function retrieveReparti(dispatch){
    fetch(path)
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
