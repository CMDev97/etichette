import {setContentDrawer, showDrawer} from "../actions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {useDispatch} from "react-redux";
import DrawerFormIngredient from "../component/drawer/DrawerFormIngredient";
import {Constant} from "../Constant";
import ViewDefaultTable from "../component/table/ViewDefaultTable";
import {columsIngredient} from "../component/Colums";
import {Button} from "antd";


function ViewIngredients(){

    const dispatch = useDispatch();

    return (
        <>
            <h3 className={"mt-4"}>Ingredients</h3>
            <ViewDefaultTable type={Constant.ingredient} extra={
                <Button type={"primary"} onClick={()=>{dispatch(setContentDrawer(<DrawerFormIngredient/>));
                    dispatch(showDrawer("Nuovo ingrediente"));}}>
                    <FontAwesomeIcon className="me-2" icon={faPlus}/> Nuovo
                </Button>} columns={columsIngredient(dispatch)}/>
        </>

    );
}

export default ViewIngredients;
