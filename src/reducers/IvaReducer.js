
const initialState = {
    list:[],
    loadingUpload:false,
    valueEdit: {
        description:'',
        value:1
    }
}


const IvaReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LIST_IVAS':
            return {
                ...state, list: action.values
            }
        case 'SET_LOADING_UPLOAD_IVAS':
            return {
                ...state, loadingUpload: action.value
            }
        default: return state
    }

}

export default IvaReducer