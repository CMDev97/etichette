import React, {useEffect} from "react";
import {Col} from "react-bootstrap";
import {Button, Card, List} from "antd";
import {faTrashAlt, faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {deleteIncidenzaProduct, retriveIngredientsProduct} from "../actions/ActionIngredient";
import {useDispatch, useSelector} from "react-redux";
import {setContentDrawer, setContentModal, showDrawer, showModal} from "../actions";
import ModalDeleteEntityComponent from "./ModalComponents/ModalDeleteEntityComponent";
import DrawerFormIncidenzaProdotto from "./DrawerComponent/DrawerFormIncidenzaProdotto";

function IngredientComponent(props){
    const ingredientReducer = useSelector(state => state.ingredient);
    const dispatch = useDispatch();

    useEffect(()=> {
        retriveIngredientsProduct(dispatch, props.id);
    },[1]);


    return (
        <Col md={4}>
            <Card className="pb-3 shadow">
                <div className="card-body d-flex">
                    <h3 className="card-title w-100 text-start mb-0">Ingredienti</h3>
                    <span className="flex-shrink-1">
						<Button onClick={()=>{
                            dispatch(setContentDrawer(<DrawerFormIncidenzaProdotto idProduct={props.id} />));
                            dispatch(showDrawer("Nuova incidenza"));
                        }} shape="round" type="primary"><FontAwesomeIcon icon={faPlusCircle}/></Button>
					</span>
                </div>
                <List
                    className="card-body"
                    itemLayout="horizontal"
                    dataSource={ingredientReducer.incidenze}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                className="text-start"
                                title={item.ingrediente.description}
                                description={"Incidenza : " + item.incidenza + "%"}
                            />
                            <Button onClick={()=>{
                                dispatch(setContentModal(<ModalDeleteEntityComponent id={item.id} onDelete={deleteIncidenzaProduct} />));
                                dispatch(showModal("Rimuovi Ingrediente"));
                            }} type="danger" shape="round"><FontAwesomeIcon icon={faTrashAlt}/></Button>
                        </List.Item>
                    )}
                />
            </Card>
        </Col>
    );

}

export default IngredientComponent;