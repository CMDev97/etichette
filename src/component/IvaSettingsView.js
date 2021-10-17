import React from "react";
import {Button} from "antd";
import {useDispatch} from "react-redux";
import {setContentDrawer, showDrawer} from "../actions";
import FormIva from "./forms/FormIva";
import ViewDefaultTable from "./table/ViewDefaultTable";
import {Constant} from "../Constant";
import {columnsIvas} from "./table/Colums";



function IvaSettingsView(){

    const dispatch = useDispatch();

    return (
        <ViewDefaultTable type={Constant.iva} columns={columnsIvas(dispatch)} extra={
            <Button onClick={()=>{
                dispatch(setContentDrawer(<FormIva item={undefined}/>));
                dispatch(showDrawer("Aggiungi reparto"));
            }} type="primary">
                Nuovo
            </Button>} />
    );

}

export default IvaSettingsView;
