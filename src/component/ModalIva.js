import React from "react";

import {Modal, Button, Form} from "react-bootstrap";

class ModalIva extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value : (this.props.edit) ? this.props.value : '',
            description : (this.props.edit) ? this.props.description : ''
        }
        this._handleChangeDescription = this._handleChangeDescription.bind(this);
        this._handleChangeValue = this._handleChangeValue.bind(this);
        this._handleClickSave = this._handleClickSave.bind(this);
    }

    _handleChangeValue(event){
        this.setState({value : event.target.value});
    }

    _handleChangeDescription(event){
        this.setState({description : event.target.value});
    }

    _handleClickSave(event){
        console.log(this.state.description);
        console.log(this.state.value);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ description: this.state.description,
                                            value:this.state.value})
        };
        fetch('http://localhost:8080/api/iva', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({value:'', description:''});
                this.props.onHide();
                this.props.parent.reloadData();
            });
    }


    render() {
        let title = "Modifica Iva";
        let textButton = "Salva modifiche";
        if (!this.props.edit){
            title = "Crea Iva";
            textButton = "Crea";
        }
        return (
            <Modal show={this.props.show} onHide={this.props.onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Descrizione</Form.Label>
                            <Form.Control type="text" value={this.state.description}
                                          placeholder="Inserisci descrizione" onChange={this._handleChangeDescription} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Valore</Form.Label>
                            <Form.Control type="number" value={this.state.value}
                                          placeholder="Inserisci valore" onChange={this._handleChangeValue}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={this.props.onHide} variant="light">Annulla</Button>
                    <Button onClick={this._handleClickSave} variant="primary">{textButton}</Button>
                </Modal.Footer>

            </Modal>
        );
    }

}

export default ModalIva;