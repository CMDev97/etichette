import React from "react";
import {Modal} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {hideModal} from "../../actions";

function ModalView(){
    const modal = useSelector(state => state.modal);
    const dispatch = useDispatch();
    console.log(modal);
    return (
        <Modal show={modal.visible} onHide={()=>{dispatch(hideModal())}}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {modal.title}
                </Modal.Title>
            </Modal.Header>
            {modal.content}
        </Modal>
    );
}

export default ModalView;