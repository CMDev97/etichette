import {Button, Col, Row} from "react-bootstrap";
import FormSearchComponent from "../component/FormSearchComponent";
import {setContentDrawer, showDrawer} from "../actions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import TableProduct from "../component/table/TableProduct";
import React from "react";
import {useDispatch} from "react-redux";
import TableIngredient from "../component/table/TableIngredient";
import DrawerFormIngredient from "../component/DrawerComponent/DrawerFormIngredient";


function ViewIngredients(){
    const dispatch = useDispatch();

    const startSearch = (value) => {
        console.log(value);
    }

    return (
        <div>
            <h2 className="mt-4">Ingredienti</h2>
            <Row className="mt-5 d-flex justify-content-between">
                <Col md="4">
                    <FormSearchComponent onClickSearch={startSearch}/>
                </Col>
                <Col className="text-end">
                    <Button onClick={()=>{
                        dispatch(setContentDrawer(<DrawerFormIngredient/>));
                        dispatch(showDrawer("Nuovo ingrediente"));
                    }}>
                        <FontAwesomeIcon className="me-2" icon={faPlus}/> Nuovo
                    </Button>
                </Col>
            </Row>
            <TableIngredient className="mt-4"/>
        </div>
    );
}

export default ViewIngredients;