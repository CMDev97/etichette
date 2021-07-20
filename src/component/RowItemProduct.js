import React, {Component} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

class RowItemProduct extends React.Component {


    constructor(props) {
        super(props);
        this._element = props.item;
    }

    render() {
        return (
            <div className="Row">
                <div className="Body">
                    <h2>{this._element.name}</h2>
                    <p>{this._element.cost}</p>
                </div>
                <FontAwesomeIcon className="Icon-right" icon={faChevronRight} />
            </div>
        );
    }
}


export default RowItemProduct;