import React, {useEffect} from "react";
import {Row, Col} from "react-bootstrap";
import {Button, Card} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {getProduct} from "../actions/ActionProduct";

function ViewDetailProduct(props){
    const productReducer = useSelector(state => state.products);
    const dispatch = useDispatch();
    const id = props.match.params.id;

    useEffect(()=>{
        getProduct(dispatch, id);
    },[1]);

    console.log(productReducer.item);

    return (
        <>
            <h1>Questi sono i dettagli del prodotto</h1>
            <Card loading={productReducer.loading}  className="mt-4">
                <Row className="justify-content-between">
                    <Col className="mt-2" lg={4}>
                        <img src="https://picsum.photos/300/300" className="rounded m-auto p-auto d-block"
                             alt="Immagine d"/>
                    </Col>
                    <Col className="mt-2" lg={8}>
                        <Row>
                            <Col className="mb-3" md={12}>
                                <span className="float-start">
                                    <h3 className="mb-2">{(productReducer.item !== null) ? productReducer.item.nome : ""}</h3>
                                </span>
                                <span className="float-left">
                                    <Button className="btn-outline-danger" shape="round">
                                        <i className= {((productReducer.item !== null) ? productReducer.item.preferito : "") ? "fas fa-heart text-danger" : "far fa-heart text-danger"}></i>
                                    </Button>
                                </span>
                            </Col>
                            <Col className="text-start" md={6}>
                                <p><span className="text-muted">Codice int.:</span>
                                    <span className="float-right">
                                        <b>
                                            <span className=" p-2">{(productReducer.item !== null) ? productReducer.item.codice : ""}</span>
                                        </b>
                                    </span>
                                </p>
                                <hr></hr>
                                <p><span className="text-muted">Confezionato :</span>
                                <span className="float-right"><b>
                                    <span className=" p-2">
                                        <i className={(productReducer.item !== null && productReducer.item.confezionato) ? "fas fa-check" : "fas fa-times"}></i>
                                    </span>
                                </b></span></p>
                            </Col>
                            <Col className="text-start" md={6}>
                                <p><span className="text-muted">Categoria :</span>
                                    <span className="float-right"><b>
                                    <span className=" p-2">
                                        {(productReducer.item !== null) ? productReducer.item.categoria.description : ""}
                                    </span>
                                </b></span></p>
                                <hr></hr>
                                <p><span className="text-muted">Reparto :</span>
                                    <span className="float-right"><b>
                                    <span className=" p-2">
                                        {(productReducer.item !== null) ? productReducer.item.reparto.description : ""}
                                    </span>
                                </b></span></p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card>
        </>
    )

}

export default ViewDetailProduct;