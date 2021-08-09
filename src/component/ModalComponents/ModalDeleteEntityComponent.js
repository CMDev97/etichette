import React from "react";
import {useDispatch} from "react-redux";
import {hideModal, setAction, setConfirmLoading} from "../../actions";
import Request from "../../utils/Request";
import {message} from "antd";

function ModalDeleteEntityComponent(props){
    const dispatch = useDispatch();

    const actionDelete = ()=>{
        console.log("Devi eliminare un 'entità con id : " + props.id);
        dispatch(setConfirmLoading(true));
        let request = new Request("http://localhost:8080/Gestionale_war/api/reparto/" + props.id);
        request.methodSuccess = () =>{
            dispatch(setConfirmLoading(false));
            message.success("Hai eliminato correttamente l'oggett");
            dispatch(hideModal());
            props.onDeleteFinish();
        }
        request.fetchDelete().catch((error)=>{
            console.log(error);
            dispatch(setConfirmLoading(false));
            message.error("Errore di connessione con il server");
        });
    };

    dispatch(setAction(actionDelete));


    return (
        <div>
            Stai per rimuovere un elemento con id : {props.id}
        </div>
    );
}


export default ModalDeleteEntityComponent;