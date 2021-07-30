const initialState = {
    visible: false,
    content:'',
    title:'Modal'
}

const ModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW':
            return {
                ...state, visible: true, title: action.title
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