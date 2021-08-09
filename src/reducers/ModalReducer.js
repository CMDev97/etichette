const initialState = {
    visible: false,
    content:'',
    title:'Modal',
    confirmLoading:false ,
    actionOk:()=>{
        console.log("Click ok");
    }
}

export const ModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_MODAL':
            return {
                ...state, visible: true, title: action.title
            }
        case 'HIDDEN_MODAL':
            return {
                ...state, visible: false
            }
        case 'NEW_CONTENT_MODAL':
            return{
                ...state, content: action.content
            }
        case 'CONFIRM_LOADING':
            return {
                ...state, confirmLoading: action.value
            }
        case 'ACTION_OK' :
            return {
                ...state, actionOk: action.value
            }
        default: return state
    }

}