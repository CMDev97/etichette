import React from "react";
import {Modal} from "react-bootstrap";

class ModalView extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            show:false,
            title:"Titolo modal"
        }
    }



    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Modal Eliminazione
                    </Modal.Title>
                </Modal.Header>

            </Modal>
        );
    }

}