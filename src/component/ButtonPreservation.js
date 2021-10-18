import {Button, Popover, Radio} from "antd";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setPreservation} from "../actions/ActionBalance";


function ButtonPreservation(){
    return (
        <Popover placement="topLeft" content={<Preservation/>} trigger="click">
            <Button >Conservazione</Button>
        </Popover>
    );
}



function Preservation(){
    const balance = useSelector(state => state.balance);

    const dispatch = useDispatch();

    const onChange = (e) => {
        dispatch(setPreservation((e.target.value)));
    }

    return(
        <Radio.Group onChange={onChange} value={balance.preservation}>
            <Radio value={1}>Breve</Radio>
            <Radio value={2}>Media</Radio>
            <Radio value={3}>Lunga</Radio>
        </Radio.Group>
    );
}

export default ButtonPreservation;
