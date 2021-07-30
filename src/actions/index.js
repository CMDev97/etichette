

export const deleteProduct = (id) =>{
    return {
        type:'DELETE',
        id:id
    }
}

export const showModal = (title) =>{
    return {
        type:"SHOW",
        title:title
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

export const changeWeight = (value)=>{
    return {
        type:"UPDATE_WEIGHT",
        value: value
    }
}