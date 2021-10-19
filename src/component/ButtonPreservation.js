import {Button, Popover, Radio} from "antd";
import React from "react";


function ButtonPreservation({value, onChangeValue}){
    return (
        <Popover placement="topLeft" content={<Preservation value={value} setValue={onChangeValue}/>} trigger="click">
            <Button >Conservazione</Button>
        </Popover>
    );
}



function Preservation({value, setValue}){

    const onChange = (e) => {
        setValue(e.target.value);
    }

    return(
        <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>Breve</Radio>
            <Radio value={2}>Media</Radio>
            <Radio value={3}>Lunga</Radio>
        </Radio.Group>
    );
}

export default ButtonPreservation;
