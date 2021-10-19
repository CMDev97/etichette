import React from "react";
import RowItemProduct from "./RowItemProduct";

function ListProduct ({dataSource, onClickItem}){

    const handleClickItemProduct = (element) => {
        onClickItem(element);
    }

    let row = [];

    dataSource.forEach((element)=>{
        row.push(<RowItemProduct key={element.idProduct} item={element} onClickItem={handleClickItemProduct}/>);
    });

    return (
        <ul className="list-group list-group-flush List mt-2">
            {row}
        </ul>
    );

}

export default ListProduct
