import React, {useEffect} from "react";
import FormSearchComponent from "../FormSearchComponent";
import ListProduct from "./ListProduct";
import {retriveOptionUnit, setListEditor} from "../../actions/ActionOptionProduct";
import {useDispatch, useSelector} from "react-redux";
import {setIdProduct, setPriceProduct} from "../../actions/ActionBalance";

function ListSearchProduct(){
    const reducer = useSelector(state => state.balance);
    const dispatch = useDispatch();

    useEffect(()=>{
        retriveOptionUnit(dispatch, "KG", setListEditor);
    },[1])

    const handleOnClickSearch = (value)=>{
        console.log(value);
    }

    const handleOnClickItem = (item) => {
        dispatch(setIdProduct(item.idProduct));
        dispatch(setPriceProduct(item.price));
    }


    return (
        <div className="List-Box px-2 py-3">
            <FormSearchComponent onClickSearch={handleOnClickSearch}/>
            <ListProduct dataSource={reducer.products} onClickItem={handleOnClickItem}/>
        </div>
    );



}

export default ListSearchProduct;