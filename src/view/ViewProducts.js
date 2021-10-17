import React from "react";
import {useDispatch} from "react-redux";
import {setContentDrawer, showDrawer} from "../actions";
import {Constant} from "../Constant";
import {columsProduct} from "../component/table/Colums";
import ViewDefaultTable from "../component/table/ViewDefaultTable";
import {Button} from "antd";
import {FormProduct} from "../component/forms/FormProduct";


function ViewProducts(){
    const dispatch = useDispatch();

    return (
        <div>
            <h2 className="mt-4">Prodotti</h2>
            <ViewDefaultTable type={Constant.product} extra={
                <Button type={"primary"} onClick={()=>{
                    dispatch(setContentDrawer(<FormProduct/>));
                    dispatch(showDrawer("Nuovo Prodotto"));}} > Nuovo </Button> } columns={columsProduct(dispatch)} />
        </div>
    );
}

export default ViewProducts;
