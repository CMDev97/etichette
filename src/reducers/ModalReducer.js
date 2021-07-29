const initialState = {
    visible: false,
    content:''
}

const ModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW':
            return {
                ...state, visible: true
            }
        case 'HIDDEN':
            return {
                ...state, visible: false
            }
        case 'NEW_CONTENT':
            return{
                ...state, content: action.content
            }
        default: return state
    }

}

export default ModalReducer;