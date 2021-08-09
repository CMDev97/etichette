import React from "react";
import Modal from "antd/es/modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import {hideModal} from "../../actions";

function ModalView(props){
    const modal = useSelector(state => state.modal);
    const dispatch = useDispatch();


    return (
        <Modal title={modal.title} visible={modal.visible} onOk={()=>{modal.actionOk()}}
        confirmLoading={modal.confirmLoading} onCancel={()=>{dispatch(hideModal())}}>
            <>{modal.content}</>
        </Modal>
    );
}

export default ModalView;