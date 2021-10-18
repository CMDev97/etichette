import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import {Button} from "antd";
import React from "react";

export function ButtonEdit({onClick}){

    return <Button onClick={()=>{
        onClick?.()
    }} shape="round"><FontAwesomeIcon icon={faEdit}/></Button>
}
