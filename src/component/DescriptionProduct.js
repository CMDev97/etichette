import {Button, Descriptions, PageHeader} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faPrint} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect} from "react";
import {useSelector} from "react-redux";

export function DescriptionProduct(){

    const reducer = useSelector(state => state.balance);

    useEffect(()=>{

    }, [reducer.idProduct]);


    return (
        <PageHeader
            className={"shadow"}
            ghost={false}
            title="Nome del prodotto"
            subTitle={reducer.price + " € / Kg"}
            extra={[
                <Button icon={<FontAwesomeIcon className={"me-2"} icon={faPlus}/>}>Ingrediente</Button>,
                <Button type="primary"
                        icon={<FontAwesomeIcon className={"me-2"} icon={faPrint}/>}> Stampa</Button>,
            ]}>
            <Descriptions size={"small"} layout={"vertical"} column={3}>
                <Descriptions.Item labelStyle={{color:"gray", fontWeight:"bold"}} label="Ingredienti" span={3}>Farina tipo 00, Acqua, Sale, Olio, Lievito di Birra, Farina tipo 00, Acqua, Sale, Olio, Lievito di Birra</Descriptions.Item>
                <Descriptions.Item labelStyle={{color:"gray", fontWeight:"bold"}} label="Confezionamento">2017-01-10</Descriptions.Item>
                <Descriptions.Item labelStyle={{color:"gray", fontWeight:"bold"}} label="Scadenza">2017-10-10</Descriptions.Item>
                <Descriptions.Item labelStyle={{color:"gray", fontWeight:"bold"}} label="Code">2017-10-10</Descriptions.Item>
            </Descriptions>
        </PageHeader>
    );
}