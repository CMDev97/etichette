import React from 'react';
import ButtonKeypad from "./ButtonKeypad";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBackspace} from '@fortawesome/free-solid-svg-icons';

function TastierinoComponent({value, onChange}){

    const handleOnClick = (val) => {
        let weight = value + "";
        if (val === "canc"){
            weight = deleteValue(weight);
        } else if (val === "point"){
            weight = addPoint(weight);
        } else {
            weight = addNumber(val, weight);
        }
        onChange(weight);
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
        return weight;
    }else {
        weight = weight + value;
    }
    return weight
}

function deleteValue(weight){
    console.log(weight.length);
    if(weight === "0.000"){
        weight = "0.";
    } else if(weight.length === 1){
        weight = "0";
    } else {
        weight = weight.substring(0, weight.length - 1);
    }
    return weight
}

function addPoint(weight){
    if(weight === "0.000"){
        weight = "0.";
    } else if(weight.indexOf('.') === -1){
        weight = weight + ".";
    }
    return weight
}

export default TastierinoComponent;
