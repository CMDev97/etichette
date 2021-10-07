import {Button, Card, Space} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect} from "react";
import TableOptionProduct from "./table/TableOptionProduct";
import {retriveOptionProduct} from "../actions/ActionOptionProduct";
import {useDispatch} from "react-redux";
import {setContentDrawer, showDrawer} from "../actions";
import DrawerFormOption from "./drawer/DrawerFormOption";
import Title from "antd/es/typography/Title";


export default function OptionProductView(props){
    const dispatch = useDispatch();

    useEffect(()=>{
            retriveOptionProduct(dispatch, props.id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [props.id])

    return (
        <Card>
            <Space direction={"vertical"} className={"w-100"}>
                <Space direction={"horizontal"} align={"center"} style={{width:"100%", justifyContent:"space-between"}}>
                    <Title level={4} className={"mb-0"}>Opzioni vendita</Title>
                    <Button onClick={()=>{
                        dispatch(setContentDrawer(<DrawerFormOption />));
                        dispatch(showDrawer("Nuova variante prodotto"));
                    }} shape="round" type="primary"><FontAwesomeIcon icon={faPlusCircle}/></Button>
                </Space>
                <TableOptionProduct />
            </Space>
        </Card>
    );

}
