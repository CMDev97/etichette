import React from "react";
import {Button, Modal} from "react-bootstrap";
import {hideModal} from "../../actions";

function ModalDeleteEntityComponent(props){


    return (
        <div>
            <Modal.Body>
                Stai per rimuovere un elemento con id : {props.id}
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={()=>props.dispatch(hideModal())} variant="light">Annulla</Button>
                <Button onClick={()=>{props.onClickPositive(props.id)}} variant="primary">Elimina</Button>
            </Modal.Footer>
        </div>
    );
}


export default ModalDeleteEntityComponent;