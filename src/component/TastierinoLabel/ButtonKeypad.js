import React from "react";
import {Button} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {changeWeight} from "../../actions";

function ButtonKeypad(props){
    const dispatch = useDispatch();

    const clickNumber = ()=>{
        dispatch(changeWeight(props.value))
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