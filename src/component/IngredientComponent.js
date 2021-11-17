import React from "react";
import {Button, Card, Space, Spin} from "antd";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import Title from "antd/es/typography/Title";
import {TableEditable} from "./table/EditableTable";
import {useGetData} from "../utils/DataManager";
import {Constant} from "../Constant";
import {useDispatch} from "react-redux";
import {setContentModal, showModal} from "../actions";
import {FormSelectIngredients} from "./forms/FormSelectIngredients";

function IngredientComponent({id}){
    const {store, progress} = useGetData(Constant.productIngredients + "?product="+id);
    const dispatch = useDispatch();


    if (progress) {
        return <Spin size={"large"}/>
    }

    return (
            <Card>

                <Space direction={"horizontal"} align={"center"} style={{width:"100%", justifyContent:"space-between", marginBottom:".5rem"}}>
                    <Title level={4} className={"mb-0"}>Ingredienti</Title>

                    <Button onClick={()=>{
                        dispatch(setContentModal(<FormSelectIngredients id={id}/>));
                        dispatch(showModal("Aggiungi ingredienti"));
                    }} shape="round" type="primary"><FontAwesomeIcon icon={faPlusCircle}/></Button>

                </Space>

                <TableEditable dataSource={store.content}/>

            </Card>

    );

}

export default IngredientComponent;
