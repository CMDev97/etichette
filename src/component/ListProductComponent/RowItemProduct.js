import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

class RowItemProduct extends React.Component {


    constructor(props) {
        super(props);
        this._element = props.item;
        this.handleClickItem = this.handleClickItem.bind(this);
    }

    handleClickItem(idElement, e){
        console.log(e);
        this.props.onClickItem(idElement);
    }

    render() {
        return (
            <li className="list-group-item Item d-flex px-1 py-2" onClick={(e)=>this.handleClickItem(this._element.name, e)}>
                <div className="w-100">
                    <h4>{this._element.name}</h4>
                    <span>Costo al KG : {this._element.cost}</span>
                </div>
                <span className="flex-shrink-1 align-self-center"><FontAwesomeIcon icon={faChevronRight} /></span>
            </li>
        );
    }
}


export default RowItemProduct;