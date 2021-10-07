import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {useDispatch} from "react-redux";
import {setContentDrawer, showDrawer} from "../actions";
import {Constant} from "../Constant";
import {columsProduct} from "../component/Colums";
import DrawerFormIngredient from "../component/drawer/DrawerFormIngredient";
import ViewDefaultTable from "../component/table/ViewDefaultTable";
import {Button} from "antd";


function ViewProdotti(){
    const dispatch = useDispatch();

    return (
        <div>
            <h2 className="mt-4">Prodotti</h2>
            <ViewDefaultTable type={Constant.product} extra={
                <Button type={"primary"} onClick={()=>{dispatch(setContentDrawer(<DrawerFormIngredient/>));
                    dispatch(showDrawer("Nuovo Prodotto"));}}>
                    <FontAwesomeIcon className="me-2" icon={faPlus}/> Nuovo
                </Button>} columns={columsProduct(dispatch)}/>
        </div>
    );
}

export default ViewProdotti;
