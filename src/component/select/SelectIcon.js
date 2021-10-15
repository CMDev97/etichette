import React, {useState} from "react";
import { Select} from "antd";
import {Option} from "antd/es/mentions";
import {useGetData} from "../../utils/DataManager";
import {CustomOption, OPTION_ICON} from "./CustomOption";

function SelectIcon({ value, onChange }){

    const [search, setSearch] = useState(null);
    const {store, loading} = useGetData("icons?" + ((search == null) ? '' : ("search="+search+"&")) + "page=1&tot=100");

    const handleChange = (value) => {
        onChange?.(value);
    }

    function onSearch(val) {
        console.log('search:', val);
        setSearch(val);
    }


    return (
        <Select
            loading={loading}
            showSearch
            onChange={handleChange}
            defaultValue={value}
            onSearch={onSearch}>

            <Option value={0}>Seleziona icona</Option>

            <CustomOption data={(store == null || store.content == null) ? null : store.content} item={OPTION_ICON}/>

        </Select>
    );



}

export default SelectIcon;
