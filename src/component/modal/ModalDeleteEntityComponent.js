import React from "react";
import {useDispatch} from "react-redux";
import {setAction, setConfirmLoading} from "../../actions";


function ModalDeleteEntityComponent(props){
    const dispatch = useDispatch();

    const actionDelete = ()=>{
        console.log("Devi eliminare un 'entità con id : " + props.id);
        dispatch(setConfirmLoading(true));
        props.onDelete(dispatch, props.id);
    };

    dispatch(setAction(actionDelete));

    return (
        <div>
            Stai per rimuovere un elemento con id : {props.id}
        </div>
    );
}


export default ModalDeleteEntityComponent;