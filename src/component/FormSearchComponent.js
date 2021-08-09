import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import {Button, Input} from "antd";


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
        let search = this.state.inputValue;
        this.props.onClickSearch(search);
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
                    <Input placeholder="Cerca..." onChange={this._updateInputValue} value={this.state.inputValue} />
                    <Button onClick={this.listenerOnClickSearch} type='primary'>
                        <FontAwesomeIcon icon={faSearch}/>
                    </Button>
                </Col>
            </Row>
        );
    }
}

export default FormSearchComponent;
