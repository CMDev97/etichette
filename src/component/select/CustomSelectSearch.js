import React, {useState} from "react";
import {Select} from "antd";
import {Option} from "antd/es/mentions";
import {useGetData} from "../../utils/DataManager";
import {CorrectOption} from "./CustomOption";

function CustomSelectSearch({ type, value = {}, onChange, isSearch=true}){

    const [search, setSearch] = useState(null);
    const stringPath = isSearch ? "?" + ((search == null) ? '' : ("search="+search+"&")) + "page=1&tot=100" : "";

    const {store, loading} = useGetData(type + stringPath);

    const handleChange = (value) => {
        onChange?.(value);
    }

    function onSearch(val) {
        setSearch(val);
    }

    return (
        <Select
            loading={loading}
            showSearch={isSearch}
            filterOption={false}
            onChange={handleChange}
            defaultValue={value.id}
            onSearch={onSearch}>

            <Option key={0} value={0}>Seleziona o cerca per nome</Option>

            {
                (store != null) ? ( (isSearch) ? store.content.map( (element) => (
                    CorrectOption({type:type, value:element})
                )) : store.map( (element) => (
                    CorrectOption({type:type, value:element})
                )) ) : ''
            }

        </Select>
    );



}

export default CustomSelectSearch;
