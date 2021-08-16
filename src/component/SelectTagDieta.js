import React, {useEffect} from "react";
import {Select} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {Option} from "antd/es/mentions";
import {reloadTagDieta} from "../actions/ActionTagDieta";


export default function SelectTagDieta(){

    const handleChange = (value)=>{
        console.log(value);
    }

    const tagReducer = useSelector(state => state.tagDieta);
    const dispatch = useDispatch();

    useEffect(()=>{
        reloadTagDieta(dispatch);
    }, [1]);

    const children = [];

    tagReducer.list.forEach((tag) => {
        children.push(<Option key={tag.id} value={tag.id} >{tag.descrizione}</Option>);
    })


    return (
        <Select
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="Please select"
            onChange={handleChange}
        >
            {children}
        </Select>
    );
}