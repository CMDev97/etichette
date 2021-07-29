import React from "react";
import TableProduct from "../component/TableProduct/TableProduct";
import {Row, Col, Button} from "react-bootstrap";
import FormSearchComponent from "../component/ListProductComponent/FormSearchComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {useSelector, useDispatch} from "react-redux";
import {hideModal, setContentModal, showModal} from "../actions";
import ModalDeleteEntityComponent from "../component/ModalDeleteEntityComponent";


function startSearch(value){
    console.log(value);
}



function ViewProdotti(){
    const dispatch = useDispatch();

    const showModalDelete = ()=>{
        dispatch(setContentModal(ModalDeleteEntityComponent(dispatch)));
        dispatch(showModal());
    }

    return (
        <div>
            <h2 className="mt-4">Prodotti</h2>
            <Row className="mt-5 d-flex justify-content-between">
                <Col md="4">
                    <FormSearchComponent onClickSearch={startSearch}/>
                </Col>
                <Col className="text-end">
                    <Button onClick={()=>{showModalDelete()}}><FontAwesomeIcon className="me-2" icon={faPlus}/> Nuovo</Button>
                </Col>
            </Row>
            <TableProduct className="mt-4"/>
        </div>
    );
}

export default ViewProdotti;