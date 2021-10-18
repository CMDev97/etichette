import React from "react";
import ListSearchProduct from "../component/ListProductComponent/ListSearchProduct";
import {Row, Col, Popover, Result} from "antd";
import {useSelector} from "react-redux";
import TastierinoComponent from "../component/TastierinoLabel/TastierinoComponent";
import {IndicatorDisplay} from "../component/IndicatorDisplay";
import {DescriptionProduct} from "../component/DescriptionProduct";
import {FrownOutlined} from "@ant-design/icons";

function ViewBalance(){
    const balance = useSelector(state => state.balance);

    console.log("Price " + ( balance.price * parseFloat(balance.weight)));

    return(
        < >
            <Row className={"mt-5"} gutter={[24,8]}>
                <Col span={8}>
                    <div className={"shadow Box"}>
                        <ListSearchProduct/>
                    </div>
                </Col>

                <Col span={16}>
                    <Row  gutter={[16,8]}>
                        <Col span={12}>
                            <IndicatorDisplay title={"Costo"} value={balance.price * parseFloat(balance.weight)} subvalue={"€"}/>
                        </Col>
                        <Col span={12}>
                            <Popover placement="topLeft" content={<TastierinoComponent/>} trigger="click">
                                <div>
                                    <IndicatorDisplay title={"Peso"} value={balance.weight} subvalue={"Kg"}/>
                                </div>
                            </Popover>
                        </Col>
                    </Row>
                    <div className={"mt-4"}>
                        {(balance.idProduct === 0) ? result() : <DescriptionProduct id={balance.idProduct} preservation={balance.preservation} product={balance.product} price={balance.price}/>}
                    </div>
                </Col>
            </Row>
        </>

    );
}

function result(){
    return (
        <div className={"shadow Box"}>
            <Result
                icon={<FrownOutlined />}
                title="Non hai selezionato ancora il prodotto! Selezionalo dalla lista affianco"/>
        </div>
    );
}

export default ViewBalance;
