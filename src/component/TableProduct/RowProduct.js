import React from 'react';
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {deleteProduct, hideModal, setContentModal, showModal} from "../../actions";
import ModalDeleteEntityComponent from "../ModalComponents/ModalDeleteEntityComponent";



function RowProduct(props){
    const dispatch = useDispatch();

    const clickDeleteProduct = (value)=>{
        dispatch(deleteProduct(value));
        dispatch(hideModal());
    }

    const showModalDelete = ()=>{
        const model = {
            dispatch: dispatch,
            id: props.element.id,
            onClickPositive : clickDeleteProduct
        }

        dispatch(setContentModal(ModalDeleteEntityComponent(model)));
        dispatch(showModal("Modal eliminazione prodotto"));
    }
    return (
        <tr className="align-middle">
            <td>{props.element.id}</td>
            <td>{props.element.name}</td>
            <td>{props.element.cost}</td>
            <td>
                <Button className="me-2" variant="primary"><FontAwesomeIcon icon={faEdit}/></Button>
                <Button onClick={()=>{showModalDelete()}} variant="danger"><FontAwesomeIcon icon={faTrashAlt}/></Button>
            </td>
        </tr>
    );
}

export default RowProduct;