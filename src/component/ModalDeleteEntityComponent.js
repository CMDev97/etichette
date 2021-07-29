import React from "react";
import {Button, Modal} from "react-bootstrap";
import {hideModal} from "../actions";

function ModalDeleteEntityComponent(props){

    return (
        <div>
            <Modal.Body>
                Stai per rimuovere un elemento con id :
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={()=>props(hideModal())} variant="light">Annulla</Button>
                <Button variant="primary">Elimina</Button>
            </Modal.Footer>
        </div>
    );
}


export default ModalDeleteEntityComponent;