import React from "react";
import RowProduct from "./RowProduct";
import Table from "react-bootstrap/Table";
const jsonData = require('../../dataMock/product.json');

function TableProduct() {
    let rows = [];
    jsonData.product.forEach(element => {
        rows.push(<RowProduct key={element.id} element={element}/>);
    });
    return(
        <Table striped borderless hover>
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
        </Table>
    );

}

export default TableProduct;