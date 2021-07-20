import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

class FormSearchComponent extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="Form-Search">
                <input type='text' placeholder="Cerca..."/>
                <button type='button'><FontAwesomeIcon className="Icon-right" icon={faSearch} /></button>
            </div>
        );
    }
}

export default FormSearchComponent;
