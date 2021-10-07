export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDDEN_MODAL = 'HIDDEN_MODAL';
export const NEW_CONTENT_MODAL = 'NEW_CONTENT_MODAL';
export const CONFIRM_LOADING = 'CONFIRM_LOADING';
export const ACTION_OK = 'ACTION_OK';
export const SET_WIDTH = 'SET_WIDTH';

const initialState = {
    visible: false,
    content:'',
    title:'Modal',
    confirmLoading:false ,
    width: "50%",
    actionOk:()=>{
        console.log("Click ok");
    }
}

export const ModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MODAL:
            return {
                ...state, visible: true, title: action.title
            }
        case HIDDEN_MODAL:
            return {
                ...state, visible: false
            }
        case NEW_CONTENT_MODAL:
            return{
                ...state, content: action.content
            }
        case CONFIRM_LOADING:
            return {
                ...state, confirmLoading: action.value
            }
        case ACTION_OK :
            return {
                ...state, actionOk: action.value
            }
        case SET_WIDTH:
            return {
                ...state, width: action.value
            }
        default: return state
    }

}
