import React from 'react';
import {Constant} from "../Constant";
import {columsIcon} from "./table/Colums";
import {FormIcon} from "./forms/FormIcon";
import ViewDefaultTable from "./table/ViewDefaultTable";
import {Button} from "antd";
import {useDispatch} from "react-redux";
import {hideModal, setContentModal, showModal} from "../actions";

function IconSettingsView(){

    const dispatch = useDispatch();

    const handleFinishSave = ()=>{
        dispatch(hideModal());
    }

    const handleNewIcon = () => {
        dispatch(setContentModal(<FormIcon onFinish={handleFinishSave}/>));
        dispatch(showModal("Nuova icona"));
    }

    return <ViewDefaultTable type={Constant.icon} columns={columsIcon()} extra={

                <Button type={"primary"} onClick={handleNewIcon}> Nuovo </Button>

            }/>


}

export default IconSettingsView;
