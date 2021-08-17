import React, {useEffect} from "react";
import TableProduct from "../component/table/TableProduct";
import {Row, Col, Button} from "react-bootstrap";
import FormSearchComponent from "../component/FormSearchComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {useDispatch} from "react-redux";
import {setContentDrawer, showDrawer} from "../actions";
import DrawerFormProduct from "../component/DrawerComponent/DrawerFormProduct";
import {reloadProduct} from "../actions/ActionProduct";


function startSearch(value){
    console.log(value);
}

function ViewProdotti(){
    const dispatch = useDispatch();

    useEffect(()=>{
        reloadProduct(dispatch);
    },[1])

    return (
        <div>
            <h2 className="mt-4">Prodotti</h2>
            <Row className="mt-5 d-flex justify-content-between">
                <Col md="4">
                    <FormSearchComponent onClickSearch={startSearch}/>
                </Col>
                <Col className="text-end">
                    <Button onClick={()=>{
                        dispatch(setContentDrawer(<DrawerFormProduct actionOnSave={reloadProduct}/>));
                        dispatch(showDrawer("Nuovo prodotto"));
                    }}>
                        <FontAwesomeIcon className="me-2" icon={faPlus}/> Nuovo
                    </Button>
                </Col>
            </Row>
            <TableProduct className="mt-4"/>
        </div>
    );
}

export default ViewProdotti;