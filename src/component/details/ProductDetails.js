
import {Button, Card, Row, Col, Space, Divider} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect, useState} from "react";
import {getRequest} from "../../actions/ActionsRequest";
import {Constant} from "../../Constant";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";


export  function ProductDetails({id}){

    const [data, setData] = useState({
        product:null,
        loading:false,
    });

    useEffect(()=>{
        console.log("use Effect");
        getRequest(Constant.product, (value) => setData({...data, loading: value}),
            (value) => setData({...data, product: value}), ()=>{});
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id]);

    return (
        <Card loading={data.loading}>
            <Space direction={"horizontal"} align={"center"} style={{width:"100%", justifyContent:"space-between"}}>
                <Title level={3} className={"mb-0"}>{(data.product != null) ? data.product.nome : ""}</Title>
                <Space direction={"horizontal"}>
                    <Button onClick={()=>{
                        //togglePrefer(dispatch, id);
                    }} shape="round">
                        <i className= {((data.product != null) ? data.product.preferito : "") ? "fas fa-heart text-danger" : "far fa-heart text-danger"}></i>
                    </Button>
                    <Button onClick={()=>{
                        //dispatch(setContentDrawer(<DrawerFormProduct item={state.product} actionOnSave={getProduct}/>))
                        //dispatch(showDrawer("Modifica Prodotto"));
                    }} shape="round"><FontAwesomeIcon icon={faEdit}/></Button>
                    <Button  type="danger" shape="round"><FontAwesomeIcon icon={faTrashAlt}/></Button>
                </Space>
            </Space>
            <Row style={{marginTop: "1rem"}}>
                <Col span={12}>
                    <Space direction={"vertical"} className={"w-100 t-start"}>
                        <Space direction={"horizontal"}>
                            <Text type={"secondary"} >Codice int.: </Text>
                            <Text strong > {(data.product !== null) ? data.product.codice : ""} </Text>
                        </Space>
                        <Divider style={{margin:0}}/>
                        <Space direction={"horizontal"} style={{width:"100%"}}>
                            <Text type={"secondary"}>Confezionato:</Text>
                            <i className={(data.product !== null && data.product.confezionato) ? "fas fa-check" : "fas fa-times"}></i>
                        </Space>
                        <Divider style={{margin:0}}/>
                    </Space>
                </Col>
                <Col span={12}>
                    <Space direction={"vertical"} className={"w-100 t-start"}>
                        <Space direction={"horizontal"} className={"w-100"}>
                            <Text type={"secondary"}>Categoria:</Text>
                            <Text strong>{(data.product !== null) ? data.product.categoria.description : ""}</Text>
                        </Space>
                        <Divider style={{margin:0}}/>
                        <Space direction={"horizontal"}>
                            <Text type={"secondary"}>Reparto:</Text>
                            <Text strong>{(data.product !== null) ? data.product.reparto.description : ""}</Text>
                        </Space>
                        <Divider style={{margin:0}}/>
                    </Space>
                </Col>

                <Col span={24}>
                    <Space direction={"horizontal"} className={"w-100"} style={{marginTop:" .5rem"}}>
                        <Text type={"secondary"}>Tags:</Text>
                        <Text strong>tags</Text>
                    </Space>
                </Col>
            </Row>
        </Card>
    );
}
