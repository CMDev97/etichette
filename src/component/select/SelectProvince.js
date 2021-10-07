import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {Option} from "antd/es/mentions";
import {Select} from "antd";
import {retrieveProvince} from "../../actions/ActionProvince";

export default function SelectProvince({value={}, onChange}){

    const provinceSelector = useSelector(state => state.province);
    const dispatch = useDispatch();

    const handleOnChange = (value) => {
        onChange?.(provinceSelector.list.findById(value));
    }

    useEffect(()=>{
        retrieveProvince(dispatch);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    let option = [];

    provinceSelector.list.forEach((element) => {
        option.push(<Option key={element.id} value={element.id}>{element.nome + " (" + element.sigla + ")"}</Option>);
    })

    return (
        <>
            <Select loading={provinceSelector.loading} defaultValue={value} onChange={handleOnChange}>
                <Option key={0} value={0}>Seleziona province</Option>
                {option}
            </Select>
        </>
    );

}
