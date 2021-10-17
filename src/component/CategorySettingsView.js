import React from 'react';
import {useDispatch} from "react-redux";
import {Button} from "antd";
import ViewDefaultTable from "./table/ViewDefaultTable";
import {columnsCategories} from "./table/Colums";
import {setContentDrawer, showDrawer} from "../actions";
import {FormCategory} from "./forms/FormCategory";

function CategorySettingsView(){

    const dispatch = useDispatch();

    return (
        <ViewDefaultTable columns={columnsCategories(dispatch)} type={"category"} extra={
            <Button type={"primary"}
                    onClick={() => {
                        dispatch(setContentDrawer(<FormCategory />))
                        dispatch(showDrawer("New Cateogry"))
                    }}> Nuovo </Button>} />
    );
}

export default CategorySettingsView;
