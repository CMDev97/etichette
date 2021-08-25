import React, {useEffect} from "react";
import {Row, Col} from "react-bootstrap";
import {Button, Card, Tag} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {getProduct, setDetailProduct, setLoadingProduct, togglePrefer} from "../actions/ActionProduct";
import {setContentDrawer, showDrawer} from "../actions";
import DrawerFormProduct from "../component/DrawerComponent/DrawerFormProduct";
import {faEdit, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import IngredientComponent from "../component/IngredientComponent";
import OptionProductView from "../component/OptionProductView";

function ViewDetailProduct(props){
    const productReducer = useSelector(state => state.products);
    const dispatch = useDispatch();
    const id = props.match.params.id;

    const actionSuccessRetrieve = (result) => {
        dispatch(setDetailProduct(result));
        dispatch(setLoadingProduct(false));
    }

    useEffect(()=>{
        dispatch(setLoadingProduct(true));
        getProduct(actionSuccessRetrieve, id);
    },[1]);

    let tags = [];

    if (productReducer.item !== null){
        productReducer.item.tagDieta.forEach(element => {
            tags.push(<Tag color="blue">{element.descrizione}</Tag>)
        });
    }

    return (
        <>
            <Card loading={productReducer.loading}  className="mt-4 shadow">
                <Row className="justify-content-between">
                    <Col className="mt-2" lg={4}>
                        <img src="https://picsum.photos/300/300" className="rounded m-auto p-auto d-block"
                             alt="Immagine d"/>
                    </Col>
                    <Col className="mt-2" lg={8}>
                        <Row>
                            <Col className="mb-3" md={6}>
                                <span className="float-start">
                                    <h3 className="mb-2">{(productReducer.item !== null) ? productReducer.item.nome : ""}</h3>
                                </span>
                            </Col>
                            <Col className="mb-3 text-end" md={6}>
                                <span>
                                    <Button onClick={()=>{
                                            togglePrefer(dispatch, id);
                                        }}
                                        className="btn-outline-danger me-2" shape="round">
                                        <i className= {((productReducer.item !== null) ? productReducer.item.preferito : "") ? "fas fa-heart text-danger" : "far fa-heart text-danger"}></i>
                                    </Button>
                                    <Button onClick={()=>{
                                        dispatch(setContentDrawer(<DrawerFormProduct item={productReducer.item} actionOnSave={getProduct}/>))
                                        dispatch(showDrawer("Modifica Prodotto"));
                                    }} className="me-2" shape="round"><FontAwesomeIcon icon={faEdit}/></Button>
                                    <Button  type="danger" shape="round"><FontAwesomeIcon icon={faTrashAlt}/></Button>
                                </span>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-start" md={6}>
                                <p><span className="text-muted">Codice int.:</span>
                                    <span className="float-right">
                                        <b><span className=" p-2">{(productReducer.item !== null) ? productReducer.item.codice : ""}</span></b>
                                    </span>
                                </p>
                                <hr></hr>
                                <p><span className="text-muted">Confezionato :</span>
                                <span className="float-right"><b>
                                    <span className=" p-2">
                                        <i className={(productReducer.item !== null && productReducer.item.confezionato) ? "fas fa-check" : "fas fa-times"}></i>
                                    </span>
                                </b></span></p>
                                <hr></hr>
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
                                <hr></hr>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-start" md={12}>
                                <p className="d-flex">
                                    <span className="text-muted">Tags : </span>
                                    <span className="ms-2 float-right">
                                        <div> {tags}</div>
                                    </span>
                                </p>
                                <hr></hr>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card>
            <Row className="py-5">
                <Col md={4}>
                    <IngredientComponent id={id}/>
                </Col>
                <Col md={8}>
                    <OptionProductView id={id}/>
                </Col>
            </Row>
        </>
    )

}

export default ViewDetailProduct;