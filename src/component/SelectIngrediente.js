import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {Option} from "antd/es/mentions";
import {Select} from "antd";
import {retrieveAllIngredient} from "../actions/ActionIngredient";

export default function SelectIngrediente({value={}, onChange}){

    const ingredienteReducer = useSelector(state => state.ingredient);
    const dispatch = useDispatch();

    const handleOnChange = (value) => {
        onChange?.(ingredienteReducer.ingredients.findById(value));
    }

    useEffect(()=>{
        retrieveAllIngredient(dispatch);
    },[1]);

    let option = [];

    ingredienteReducer.ingredients.forEach((element) => {
        option.push(<Option key={element.id} value={element.id}>{element.description}</Option>);
    })

    return (
        <>
            <Select defaultValue={0} onChange={handleOnChange}>
                <Option key={0} value={0}>Seleziona ingrediente</Option>
                {option}
            </Select>
        </>
    );

}