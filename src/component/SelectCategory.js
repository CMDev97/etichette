import React, {useEffect} from "react";
import {Option} from "antd/es/mentions";
import {Select} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {reloadCategory} from "../actions/ActionsCategory";

export default function SelectCategory({value={}, onChange}){

    const categoryReducer = useSelector(state => state.category);
    const dispatch = useDispatch();

    const handleOnChange = (value) => {
        console.log(categoryReducer.list.findById(value));
        onChange?.(categoryReducer.list.findById(value));
    }


    useEffect(()=>{
        reloadCategory(dispatch);
    },[1]);

    let option = [];
    categoryReducer.list.forEach((element) => {
        option.push(<Option key={element.id} value={element.id}>{element.description}</Option>);
    });


    return (
      <>
          <Select defaultValue={value} onChange={handleOnChange}>
              <Option key={0} value={0}>Seleziona categoria</Option>
              {option}
          </Select>
      </>
    );

}

