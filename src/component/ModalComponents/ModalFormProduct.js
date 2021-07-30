import React from "react";
import {Button, Form, Modal} from "react-bootstrap";

class ModalFormProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            cost:0.00
        }
        this._handleChangeCost = this._handleChangeCost.bind(this);
        this._handleChangeName = this._handleChangeName.bind(this);
    }

    _handleChangeName(event){
        this.setState({name : event.target.value});
    }

    _handleChangeCost(event){
        this.setState({cost: event.target.value});
    }

    render() {
        return(
            <>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={this.state.name}
                                          placeholder="Inserisci descrizione" onChange={this._handleChangeName} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Cost</Form.Label>
                            <Form.Control type="number" value={this.state.cost}
                                          placeholder="Inserisci valore" onChange={this._handleChangeCost}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="light">Annulla</Button>
                    <Button variant="primary">Salva</Button>
                </Modal.Footer>
            </>
        );
    }

}

export default ModalFormProduct;