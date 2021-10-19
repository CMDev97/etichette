

export const setListIvas = (value) => {
    return {
        type:'SET_LIST_IVAS',
        values:value
    }
}

export const setLoadingUploadIvas = (value) =>{
    return {
        type:'SET_LOADING_UPLOAD_IVAS',
        value:value
    }
}

export const showDrawer = (title) =>{
    return {
        type:"SHOW_DRAWER",
        title:title
    }
}

export const hideDrawer = () =>{
    return {
        type:"HIDDEN_DRAWER"
    }
}

export const setContentDrawer = (value)=>{
    return {
        type:"NEW_CONTENT_DRAWER",
        content:value
    }
}

export const showModal = (title) =>{
    return {
        type:"SHOW_MODAL",
        title:title
    }
}

export const setContentModal = (value)=>{
    return {
        type:"NEW_CONTENT_MODAL",
        content:value
    }
}

export const hideModal = ()=>{
    return {
        type:"HIDDEN_MODAL"
    }
}

export const setConfirmLoading = (value)=>{
    return{
        type:"CONFIRM_LOADING",
        value:value
    }
}

export const setAction = (func) => {
    return {
        type:"ACTION_OK",
        value:func
    }
}

export const changeWeight = (value)=>{
    return {
        type:"UPDATE_WEIGHT",
        value: value
    }
}

