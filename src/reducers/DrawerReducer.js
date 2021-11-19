const initialState = {
    visible: false,
    content:'',
    title:'Drawer'
}

export const ACTION_HIDDEN_DRAWER = {
    type: 'HIDDEN_DRAWER'
}

const DrawerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_DRAWER':
            return {
                ...state, visible: true, title: action.title
            }
        case 'HIDDEN_DRAWER':
            return {
                ...state, visible: false, content: ''
            }
        case 'NEW_CONTENT_DRAWER':
            return{
                ...state, content: action.content
            }
        default: return state
    }

}

export default DrawerReducer;
