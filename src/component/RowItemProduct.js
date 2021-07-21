import React, {Component} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {Row} from "react-bootstrap";

class RowItemProduct extends React.Component {


    constructor(props) {
        super(props);
        this._element = props.item;
    }

    render() {
        return (
            <div className="d-flex px-1 py-2">
                <div className="w-100">
                    <h4>{this._element.name}</h4>
                    <span>Costo al KG : {this._element.cost}</span>
                </div>
                <span className="flex-shrink-1 align-self-center"><FontAwesomeIcon icon={faChevronRight} /></span>
            </div>
        );
    }
}


export default RowItemProduct;