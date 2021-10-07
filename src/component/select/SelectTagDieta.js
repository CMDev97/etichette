import React, {useEffect} from "react";
import {Select} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {Option} from "antd/es/mentions";
import {reloadTagDieta} from "../../actions/ActionTagDieta";


export default function SelectTagDieta({value={}, onChange}){

    const handleChange = (value)=>{
        let json = []
        value.forEach((element)=>{
            json.push({id:element, descrizione:""});
        });
        onChange?.(json);
    }

    const tagReducer = useSelector(state => state.tagDieta);
    const dispatch = useDispatch();

    useEffect(()=>{
        reloadTagDieta(dispatch);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const children = [];

    tagReducer.list.forEach((tag) => {
        children.push(<Option  key={tag.id} value={tag.id} >{tag.descrizione}</Option>);
    })

    const ids = [];
    value.forEach(element => {
        ids.push(element.id);
    })

    return (
        <Select defaultValue={ids} mode="multiple" allowClear style={{ width: '100%' }} placeholder="Please select"
            onChange={handleChange}>
            {children}
        </Select>
    );
}
