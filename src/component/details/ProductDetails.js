import {Card, Row, Col, Space, Divider, Spin} from "antd";
import React from "react";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import {useGetData} from "../../utils/DataManager";
import {Constant} from "../../Constant";
import {ButtonLike} from "../button-action/ButtonLike";
import {ButtonDelete} from "../button-action/ButtonDelete";
import {ButtonEdit} from "../button-action/ButtonEdit";
import {useDispatch} from "react-redux";
import {setContentDrawer, showDrawer} from "../../actions";
import {FormProduct} from "../forms/FormProduct";


export  function ProductDetails({id}){
    const dispatch = useDispatch();
    const { store, error, progress } = useGetData(Constant.product + "/" + id);

    if (progress) {
        return <Card>
            <Spin size={"large"}/>
        </Card>
    }

    if (error) {
        return <Card>
            <Text>Errore durante la richiesta</Text>
        </Card>
    }

    return (
        <Card>
            <Space direction={"horizontal"} align={"center"} style={{width:"100%", justifyContent:"space-between"}}>
                <Title level={3} className={"mb-0"}>{store.nome}</Title>
                <Space direction={"horizontal"}>
                    <ButtonLike type={Constant.product} id={id} initialState={store.preferito}/>
                    <ButtonEdit onClick={()=>{
                        dispatch(setContentDrawer(<FormProduct item={store}/>))
                        dispatch(showDrawer("Modifica Prodotto"));
                    }}/>
                    <ButtonDelete type={Constant.product} id={id}/>
                </Space>
            </Space>
            <Row style={{marginTop: "1rem"}}>
                <Col span={12}>
                    <Space direction={"vertical"} className={"w-100 t-start"}>
                        <Space direction={"horizontal"}>
                            <Text type={"secondary"} >Codice int.: </Text>
                            <Text strong > {store.codice} </Text>
                        </Space>
                        <Divider style={{margin:0}}/>
                        <Space direction={"horizontal"} style={{width:"100%"}}>
                            <Text type={"secondary"}>Confezionato:</Text>
                            <i className={(store.confezionato) ? "fas fa-check" : "fas fa-times"}></i>
                        </Space>
                        <Divider style={{margin:0}}/>
                    </Space>
                </Col>
                <Col span={12}>
                    <Space direction={"vertical"} className={"w-100 t-start"}>
                        <Space direction={"horizontal"} className={"w-100"}>
                            <Text type={"secondary"}>Categoria:</Text>
                            <Text strong>{store.categoria.description}</Text>
                        </Space>
                        <Divider style={{margin:0}}/>
                        <Space direction={"horizontal"}>
                            <Text type={"secondary"}>Reparto:</Text>
                            <Text strong>{store.reparto.description}</Text>
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
