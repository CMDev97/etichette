import React from 'react';
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrashAlt} from "@fortawesome/free-solid-svg-icons";

function RowProduct(props){
    return (
        <tr className="align-middle">
            <td>{props.element.id}</td>
            <td>{props.element.name}</td>
            <td>{props.element.cost}</td>
            <td>
                <Button className="me-2" variant="primary"><FontAwesomeIcon icon={faEdit}/></Button>
                <Button variant="danger"><FontAwesomeIcon icon={faTrashAlt}/></Button>
            </td>
        </tr>
    );
}

export default RowProduct;