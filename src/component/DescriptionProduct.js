import {Button, Card, Descriptions, PageHeader, Skeleton} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faPrint} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {getProduct} from "../actions/ActionProduct";
import {setProductSelect} from "../actions/ActionBalance";
import {ButtonPrintLabel} from "./ButtonPrintLabel";
import ButtonPreservation from "./ButtonPreservation";

export function DescriptionProduct(props){

    const dispatch = useDispatch();
    const [loading, setLoading ] = useState(props.product === undefined);


    const onSuccessRetrieve = (product) => {
        setLoading(false);
        dispatch(setProductSelect(product));
    }

    useEffect(()=>{
        setLoading(true);
        getProduct(onSuccessRetrieve, props.id);
    }, [props.id]);

    let dataScad = new Date();
    dataScad.setMonth(dataScad.getMonth() + props.preservation);


    return (
        <>
            {(loading) ?
                <Card><Skeleton active /></Card>
                :
                <PageHeader
                    className={"shadow"}
                    ghost={false}
                    title={(props.product !== undefined) ? props.product.nome : ""}
                    subTitle={props.price + " € / Kg"}
                    extra={[
                        <ButtonPreservation/>,
                        <ButtonPrintLabel/>
                    ]}>

                    <Descriptions size={"small"} layout={"vertical"} column={3}>
                        <Descriptions.Item labelStyle={{color:"gray", fontWeight:"bold"}} label="Ingredienti" span={3}>{(props.product !== undefined) ? props.product.ingredients : ""}</Descriptions.Item>
                        <Descriptions.Item labelStyle={{color:"gray", fontWeight:"bold"}} label="Confezionamento">{new Date().toLocaleDateString()}</Descriptions.Item>
                        <Descriptions.Item labelStyle={{color:"gray", fontWeight:"bold"}} label="Scadenza">{dataScad.toLocaleDateString()}</Descriptions.Item>

                        <Descriptions.Item labelStyle={{color:"gray", fontWeight:"bold"}} label="Code">{(props.product !== undefined) ? props.product.codice : ""}</Descriptions.Item>
                    </Descriptions>
                </PageHeader>
                }
        </>
    );
}