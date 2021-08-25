import React from "react";
import {Button} from "react-bootstrap";

function ButtonKeypad(props){

    const clickNumber = ()=>{
        props.onClick(props.value);
    }

    return (
        <div className="col-4">
            <Button onClick={()=>{clickNumber()}} className="w-100 my-2 py-3 Border-Radius" type="button">
                {props.icon}
            </Button>
        </div>
    );
}

export default ButtonKeypad;