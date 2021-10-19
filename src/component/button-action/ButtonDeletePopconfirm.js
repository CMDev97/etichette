import {Button, message, Popconfirm} from "antd";
import React, {useState} from "react";

import Request from "../../utils/Request";
import {Constant} from "../../Constant";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons";


export function ButtonDeletePopconfirm({type, id}){

    const [loading, setLoading] = useState(false);

    const actionDelete = () => {
        setLoading(true);

        const request = new Request(Constant.urlBase + type + "/" + id);

        request.methodSuccess = () =>{
            setLoading(false)
            message.success("Cancellato correttamente");
        }

        request.methodError = (status) => {
            setLoading(false);
            message.error("Errore " + status);
        }

        request.fetchDelete();
    };


    return <Popconfirm
        title="Are you sure to delete this item?"
        onConfirm={actionDelete}
        okText="Yes"
        cancelText="No"

    >
        <Button loading={loading} shape="circle" type={"ghost"} danger><FontAwesomeIcon icon={faTrashAlt}/></Button>
    </Popconfirm>
}
