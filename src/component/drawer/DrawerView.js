import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {hideDrawer} from "../../actions";
import {Drawer} from "antd";

function DrawerView(){
    const drawer = useSelector(state => state.drawer);
    const dispatch = useDispatch();

    return (
        <Drawer
            title={drawer.title}
            width={520}
            closable={false}
            onClose={()=>{dispatch(hideDrawer())}}
            visible={drawer.visible}>
        {drawer.content}
    </Drawer>
    );
}

export default DrawerView;