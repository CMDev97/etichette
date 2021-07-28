import React from "react";
import {Button, Modal} from "react-bootstrap";

class ModalDeleteEntityComponent extends React.Component {
    constructor(props) {
        super(props);
        this._handleRemoveElement = this._handleRemoveElement.bind(this);
    }

    _handleRemoveElement(){
        console.log("remove " + this.props.entity + " con id " + this.props.id);
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Modal Eliminazione
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Stai per rimuovere un elemento con id : {this.props.id}
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={this.props.onHide} variant="light">Annulla</Button>
                    <Button onClick={this._handleRemoveElement} variant="primary">Elimina</Button>
                </Modal.Footer>
            </Modal>
        );
    }

}

export default ModalDeleteEntityComponent;