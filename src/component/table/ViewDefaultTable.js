import React, {useState} from "react";
import FormSearchComponent from "../forms/FormSearchComponent";
import CustomTable from "./CustomTable";
import {Space} from "antd";


function ViewDefaultTable({type, extra='', columns, selection = false,
                          onChangeSelection}){

    const [path, setPath] = useState(type);

    const startSearch = (value) => {
        setPath(type + "?search=" + value);
    }

    const cancelSearch = () => {
        setPath(type);
    }

    return (
        <>
            <Space style={{width:"100%", justifyContent:"space-between", margin:"0.5rem 0"}}
                   direction={"horizontal"} size={"large"}>
                <FormSearchComponent onClickSearch={startSearch} onClickCancel={cancelSearch}/>
                {extra}
            </Space>
            <CustomTable path={path} column={columns} selection={selection} onChangeSelection={onChangeSelection}/>
        </>
    );

}

export default ViewDefaultTable;
