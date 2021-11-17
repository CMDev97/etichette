import React from 'react';
import {useDispatch} from "react-redux";
import {Button} from "antd";
import ViewDefaultTable from "../table/ViewDefaultTable";
import {columnsCategories} from "../table/Colums";
import {setContentDrawer, showDrawer} from "../../actions";
import {FormCategory} from "../forms/FormCategory";
import {Constant} from "../../Constant";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

function CategorySettingsView(){

    const dispatch = useDispatch();

    return (
        <ViewDefaultTable columns={columnsCategories(dispatch)} type={Constant.category} extra={
            <Button type={"primary"}
                    onClick={() => {
                        dispatch(setContentDrawer(<FormCategory />))
                        dispatch(showDrawer("New Cateogry"))
                    }}><FontAwesomeIcon icon={faPlus} />  Nuovo </Button>} />
    );
}

export default CategorySettingsView;
