import parse from "html-react-parser";
import {Option} from "antd/es/mentions";
import React from "react";
import {Constant} from "../../Constant";


export function CorrectOption({type, value}){
    switch (type){
        case Constant.icon :
            return OPTION_ICON(value);
        case Constant.category :
            return OPTION_CATEGORY(value);
        case Constant.iva :
            return OPTION_IVA(value);
        case Constant.unit:
            return OPTION_UNIT(value);
        default : return ''
    }
}


const OPTION_ICON = (element) => {
    return <Option value={element.id} key={element.id}>{(element.code != null) ? parse(element.code) : ""} {element.description}</Option>
}

const OPTION_CATEGORY = (element) => {
    return <Option key={element.id} value={element.id}>{element.description}</Option>;
}

const OPTION_IVA = (element) => {
    return <Option key={element.id} value={element.id}>{element.description}</Option>
}

const OPTION_UNIT = (element) => {
    return <Option key={element} value={element}>{element}</Option>
}
