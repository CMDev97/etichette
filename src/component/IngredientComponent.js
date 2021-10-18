import React from "react";
import {Button, Card, Space} from "antd";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {columnsIncidenze} from "./table/Colums";
import Title from "antd/es/typography/Title";
import CustomTable from "./table/CustomTable";
import {Constant} from "../Constant";

function IngredientComponent({id}){
    //const dispatch = useDispatch();

    return (
            <Card>

                <Space direction={"horizontal"} align={"center"} style={{width:"100%", justifyContent:"space-between"}}>
                    <Title level={4} className={"mb-0"}>Ingredienti</Title>
                    <Button onClick={()=>{

                    }} shape="round" type="primary"><FontAwesomeIcon icon={faPlusCircle}/></Button>
                </Space>

                <CustomTable path={Constant.productIngredients + "?product=" + id} colums={columnsIncidenze()}/>

            </Card>

    );

}

export default IngredientComponent;
