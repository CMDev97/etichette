import React from "react";
import Modal from "antd/es/modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import {hideModal} from "../../actions";


function ModalView(){
    const modal = useSelector(state => state.modal);
    const dispatch = useDispatch();


    return (
        <Modal title={modal.title} width={modal.width}
               visible={modal.visible} footer={null} onOk={()=>{modal.actionOk()}}
        confirmLoading={modal.confirmLoading} onCancel={()=>{dispatch(hideModal())}}>
            {modal.content}
        </Modal>
    );

}


export default ModalView;
