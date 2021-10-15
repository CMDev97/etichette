import parse from "html-react-parser";
import {Option} from "antd/es/mentions";
import React from "react";


export function CustomOption({data, item}){
    if (data == null){
        return ''
    }

    return <>{
        data.map(icon => (
            <Option value={icon.id} key={icon.id}>{parse(icon.code)} {icon.description}</Option>
        ))}
    </>
}


export const OPTION_ICON = (icon) => {
    console.log(icon + "icons");
    return <Option value={icon.id} key={icon.id}>{parse(icon.code)} {icon.description}</Option>
}
