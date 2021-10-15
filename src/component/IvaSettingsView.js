import React from "react";
import {Button} from "antd";
import {useDispatch} from "react-redux";
import {setContentDrawer, showDrawer} from "../actions";
import DrawerIva from "./drawer/DrawerIva";
import ViewDefaultTable from "./table/ViewDefaultTable";
import {Constant} from "../Constant";
import {columnsIvas} from "./Colums";



function IvaSettingsView(){

    const dispatch = useDispatch();

    return (
        <ViewDefaultTable type={Constant.reparto} columns={columnsIvas(dispatch)} extra={
            <Button onClick={()=>{
                dispatch(setContentDrawer(<DrawerIva item={undefined}/>));
                dispatch(showDrawer("Aggiungi reparto"));
            }} type="primary">
                Nuovo
            </Button>} />
    );

}

export default IvaSettingsView;
