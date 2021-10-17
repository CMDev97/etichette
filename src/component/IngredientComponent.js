import React, {useEffect} from "react";
import {Button, Card, Space, Table} from "antd";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {retriveIngredientsProduct} from "../actions/ActionIngredient";
import {useDispatch, useSelector} from "react-redux";
import {columnsIncidenze} from "./table/Colums";
import Title from "antd/es/typography/Title";

function IngredientComponent(props){
    const ingredientReducer = useSelector(state => state.ingredient);
    const dispatch = useDispatch();

    useEffect(()=> {
        retriveIngredientsProduct(dispatch, props.id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
            <Card>

                <Space direction={"horizontal"} align={"center"} style={{width:"100%", justifyContent:"space-between"}}>
                    <Title level={4} className={"mb-0"}>Ingredienti</Title>
                    <Button onClick={()=>{
                    }} shape="round" type="primary"><FontAwesomeIcon icon={faPlusCircle}/></Button>
                </Space>

                <Table
                    dataSource={ingredientReducer.incidenze}
                    columns={columnsIncidenze()}
                />

            </Card>

    );

}

export default IngredientComponent;
