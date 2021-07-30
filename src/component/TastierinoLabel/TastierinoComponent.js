import React from 'react';
import ButtonKeypad from "./ButtonKeypad";
import {Card} from "react-bootstrap";
import {useSelector} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBackspace} from '@fortawesome/free-solid-svg-icons';

function TastierinoComponent(){
    const editorState = useSelector(state => state.editor);
    let html = [];
    for (let i = 1; i < 10; i++){
        html.push(<ButtonKeypad value={i} icon={i}/>);
    }
    html.push(<ButtonKeypad value="." icon="."/>);
    html.push(<ButtonKeypad value="0" icon="0"/>);
    html.push(<ButtonKeypad value="canc" icon={<FontAwesomeIcon icon={faBackspace}/>}/>);

    return (
        <div className="px-2 py-3">
            <h1 className="display-3 ps-3 py-3 bg-dark text-white text-start Border-Radius">{editorState.weight}</h1>
            <div className="row mt-2" >
                {html}
            </div>
        </div>
    );

}

export default TastierinoComponent;