import ModalDeleteEntityComponent from "../component/ModalDeleteEntityComponent";


export const showModal = () =>{
    return {
        type:"SHOW"
    }
}

export const hideModal = () =>{
    return {
        type:"HIDDEN"
    }
}

export const setContentModal = (value)=>{
    return {
        type:"NEW_CONTENT",
        content:value
    }
}