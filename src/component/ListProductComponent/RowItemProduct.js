import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

function RowItemProduct(props){


    const handleClickItem = (item, e) => {
        console.log(e);
        props.onClickItem(item);
    }

    return (
        <li className="list-group-item Item d-flex px-1 py-2" onClick={(e) =>
            handleClickItem(props.item, e)}>
            <div className="w-100">
                <h4>{props.item.nameProduct}</h4>
                <span>Costo al KG : {props.item.price}</span>
            </div>
            <span className="flex-shrink-1 align-self-center"><FontAwesomeIcon icon={faChevronRight} /></span>
        </li>
    );

}


export default RowItemProduct;