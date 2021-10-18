import {setContentModal, showModal} from "../../actions";
import GenericDeleteModal from "../modal/GenericDeleteModal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {Button} from "antd";
import React from "react";
import {useDispatch} from "react-redux";


export function ButtonDelete({type, id}){
    const dispatch = useDispatch();

    return <Button onClick={()=>{
        dispatch(setContentModal(<GenericDeleteModal id={id} type={type}/>));
        dispatch(showModal("Rimuovi " + type ));
    }} shape="round" type="danger"><FontAwesomeIcon icon={faTrashAlt}/></Button>
}
