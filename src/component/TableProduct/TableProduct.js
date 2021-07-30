import React from "react";
import RowProduct from "./RowProduct";
import {useSelector} from "react-redux";
import MessageEndTable from "../MessageEndTable";

function TableProduct() {
    const productsState = useSelector(state => state.products);
    let rows = [];
    productsState.forEach(element => {
        rows.push(<RowProduct key={element.id} element={element}/>);
    });
    if (rows.length === 0){
        rows.push(<MessageEndTable colSpan='4' />)
    }
    return(
        <table className='table table-image table-stripe'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Cost</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );

}

export default TableProduct;