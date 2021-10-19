import {Col, Popover, Result, Row} from "antd";
import {IndicatorDisplay} from "../IndicatorDisplay";
import TastierinoComponent from "../TastierinoLabel/TastierinoComponent";
import {DescriptionProduct} from "../DescriptionProduct";
import React from "react";
import {FrownOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {setWeight} from "../../actions/ActionFormBalance";


export function FormBalanceProduct(){

    const form = useSelector(state => state.formBalanceReducer);
    const dispatch = useDispatch();

    if (form.option == null) {
        return <ResultNotProduct />
    }

    return <>
        <Row gutter={[16,8]}>
            <Col span={12}>
                <IndicatorDisplay title={"Costo"} value={strip(form.option.price * (form.weight / form.option.quantity))} subvalue={"€"}/>
            </Col>
            <Col span={12}>
                <Popover placement="topLeft" content={<TastierinoComponent value={form.weight} onChange={(value) => dispatch(setWeight(value))}/>} trigger="click">
                    <div>
                        <IndicatorDisplay title={"Peso"} value={form.weight} subvalue={"Kg"}/>
                    </div>
                </Popover>
            </Col>
        </Row>
        <div className={"mt-4"}>
            <DescriptionProduct id={form.option.idProduct}/>
        </div>
    </>
}

function ResultNotProduct(){
    return (
        <div className={"shadow Box"}>
            <Result
                icon={<FrownOutlined />}
                title="Non hai selezionato ancora il prodotto! Selezionalo dalla lista affianco"/>
        </div>
    );
}

function strip(number) {
    return (parseFloat(number).toPrecision(2));
}
