import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {hideModal} from "../../actions";
import {Drawer} from "antd";

function ModalView(){
    const modal = useSelector(state => state.modal);
    const dispatch = useDispatch();
    console.log(modal);
    return (
        <Drawer
            title={modal.title}
            width={520}
            closable={false}
            onClose={()=>{dispatch(hideModal())}}
            visible={modal.visible}>
        {modal.content}
    </Drawer>
    );
}

export default ModalView;