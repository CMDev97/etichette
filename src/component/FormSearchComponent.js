import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import {Button} from "react-bootstrap";


class FormSearchComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
        this.listenerOnClickSearch = this.listenerOnClickSearch.bind(this);
        this._updateInputValue = this._updateInputValue.bind(this);
    }

    listenerOnClickSearch() {
        console.log("Devo recuperare il valore di input");
        console.log(this.state.inputValue);
        let search = this.state.inputValue;
        let list = this.props.parent.state.lista;
        list = list.filter(element => element.name.startsWith(search));
        console.log(list);
        this.props.parent.list = list;
    }

    _updateInputValue(evt) {
        this.setState({
            inputValue: evt.target.value
        });
    }

    render() {
        return (
            <Row>
                <Col className="d-flex">
                    <FormControl className="me-2"
                        placeholder="Cerca..."
                        aria-label="Cerca"
                        aria-describedby="basic-addon1"
                        value={this.state.inputValue} onChange={this._updateInputValue}
                    />
                    <Button className="rounded-pill" onClick={this.listenerOnClickSearch} type='button'>
                        <FontAwesomeIcon icon={faSearch}/>
                    </Button>
                </Col>
            </Row>
        );
    }
}

export default FormSearchComponent;
