import React, {useEffect} from "react";
import {Option} from "antd/es/mentions";
import {Select} from "antd";
import {useDispatch, useSelector} from "react-redux";
import retrieveReparti from "../../actions/ActionIvas";


export default function SelectReparto({value={}, onChange}){

    const repartoReducer = useSelector(state => state.ivasReducer);
    const dispatch = useDispatch();

    const handleOnChange = (value) => {
        onChange?.(repartoReducer.list.findById(value));
    }

    useEffect(()=>{
        retrieveReparti(dispatch);
    },[1]);

    let option = [];

    repartoReducer.list.forEach((element) => {
        option.push(<Option key={element.id} value={element.id}>{element.description}</Option>);
    })

    return (
        <>
            <Select defaultValue={value} onChange={handleOnChange}>
                <Option key={0} value={0}>Seleziona reparto</Option>
                {option}
            </Select>
        </>
    );

}


