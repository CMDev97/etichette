import {Button, Card} from "antd";
import React from "react";
import Title from "antd/es/typography/Title";
import ViewDefaultTable from "./table/ViewDefaultTable";
import {Constant} from "../Constant";
import {columnsOptions} from "./table/Colums";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useDispatch} from "react-redux";
import {setContentDrawer, showDrawer} from "../actions";
import FormOptionProduct from "./forms/FormOptionProduct";


export default function OptionProductView({id}){

    const dispatch = useDispatch();

    return (
        <Card>
            <Title level={4} className={"mb-0"} style={{textAlign:"start"}}>Opzioni vendita</Title>
            <ViewDefaultTable type={Constant.option + "?product=" + id} columns={columnsOptions()}
                extra={<Button shape={"round"} type={"primary"} onClick={()=>{
                    dispatch(setContentDrawer(<FormOptionProduct idProduct={id} />));
                    dispatch(showDrawer("Nuova opzione"));
                }}><FontAwesomeIcon icon={faPlusCircle}/></Button> }
            />
        </Card>
    );

}
