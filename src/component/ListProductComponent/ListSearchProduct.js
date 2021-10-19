import React from "react";
import FormSearchComponent from "../forms/FormSearchComponent";
import ListProduct from "./ListProduct";
import {useGetData} from "../../utils/DataManager";
import {Constant} from "../../Constant";
import {Empty, Spin} from "antd";

function ListSearchProduct({handleClickItem}){

    const {store, error, progress} = useGetData(Constant.option + "/unit/KG");

    const handleOnClickSearch = (value)=>{
        console.log(value);
    }

    const handleOnClickItem = (optionSelected) => {
        handleClickItem(optionSelected);
    }

    if (progress) {
        return <BaseGroup children={<Spin size={"large"}/>} onClickSearch={handleOnClickSearch}/>
    }

    if (error) {
        return <BaseGroup onClickSearch={handleOnClickSearch} children={<Empty/>} />
    }

    return <BaseGroup onClickSearch={handleOnClickSearch} children={<ListProduct dataSource={store} onClickItem={handleOnClickItem}/>} />

}

function BaseGroup({children, onClickSearch}){
    return <div className="List-Box px-2 py-3">
        <FormSearchComponent onClickSearch={onClickSearch}/>
        {children}
    </div>
}


export default ListSearchProduct;
