import React, {useState} from "react";
import {Select} from "antd";
import {Option} from "antd/es/mentions";
import {useGetData} from "../../utils/DataManager";
import {CorrectOption} from "./CustomOption";

function CustomSelectSearch({ type, value, onChange }){

    const [search, setSearch] = useState(null);
    const {store, loading} = useGetData(type + "?" + ((search == null) ? '' : ("search="+search+"&")) + "page=1&tot=100");

    const handleChange = (value) => {
        onChange?.(value);
    }

    function onSearch(val) {
        setSearch(val);
    }

    return (
        <Select
            loading={loading}
            showSearch
            filterOption={false}
            onChange={handleChange}
            defaultValue={value}
            onSearch={onSearch}>

            <Option value={0}>Seleziona o cerca per nome</Option>

            {
                (store == null) ? '' : store.content.map( (element) => (
                    CorrectOption({type:type, value:element})
                ) )
            }

        </Select>
    );



}

export default CustomSelectSearch;
