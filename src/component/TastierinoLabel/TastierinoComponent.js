import React from 'react';
import ButtonKeypad from "./ButtonKeypad";
import {useDispatch, useSelector} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBackspace} from '@fortawesome/free-solid-svg-icons';
import {changeWeight} from "../../actions";

function TastierinoComponent(){
    const editorState = useSelector(state => state.balance);
    const dispatch = useDispatch();

    const handleOnClick = (value) => {
        let weight = editorState.weight + "";
        if (value === "canc"){
            weight = deleteValue(weight);
        } else if (value === "point"){
            weight = addPoint(weight);
        } else {
            weight = addNumber(value, weight);
        }
        dispatch(changeWeight(weight));
    }

    let html = [];
    
    for (let i = 1; i < 10; i++){
        html.push(<ButtonKeypad value={i} icon={i} onClick={handleOnClick}/>);
    }

    html.push(<ButtonKeypad value="point" icon="." onClick={handleOnClick}/>);
    html.push(<ButtonKeypad value="0" icon="0" onClick={handleOnClick}/>);
    html.push(<ButtonKeypad value="canc" onClick={handleOnClick} icon={<FontAwesomeIcon icon={faBackspace}/>}/>);

    return (
        <>
            <div className="row mt-2" >
                {html}
            </div>
        </>
    );

}


function addNumber(value, weight){
    console.log("Passo : ");
    console.log(weight.indexOf('.') - weight.length);
    if (weight === "0.000" || weight === "0"){
        weight = value;
    } else if( weight.length - weight.indexOf('.') > 3) {
        weight = weight;
    }else {
        weight = weight + value;
    }
    return weight
}

function deleteValue(weight){
    console.log(weight.length);
    if(weight === "0.000"){
        weight = "0.";
    } else if(weight.length == 1){
        weight = "0";
    } else {
        weight = weight.substring(0, weight.length - 1);
    }
    return weight
}

function addPoint(weight){
    if(weight === "0.000"){
        weight = "0.";
    } else if(weight.indexOf('.') == -1){
        weight = weight + ".";
    }
    return weight
}

export default TastierinoComponent;