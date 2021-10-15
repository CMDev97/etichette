import React from 'react';
import {useDispatch} from "react-redux";
import {Button} from "antd";
import ViewDefaultTable from "./table/ViewDefaultTable";
import {columnsCategories} from "./Colums";
import {setContentDrawer, showDrawer} from "../actions";
import DrawerCateogry from "./drawer/DrawerCateogry";

function CategorySettingsView(){

    const dispatch = useDispatch();

    return (
        <ViewDefaultTable columns={columnsCategories(dispatch)} type={"category"} extra={
            <Button type={"primary"}
                    onClick={() => {
                        dispatch(setContentDrawer(<DrawerCateogry />))
                        dispatch(showDrawer("New Cateogry"))
                    }}
        >Nuovo</Button>} />
    );
}

export default CategorySettingsView;
