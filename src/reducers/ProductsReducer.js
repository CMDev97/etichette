const jsonData = require('../dataMock/product.json');
const initialState = jsonData.product;

const ProductsReducer = (state = initialState, action)=>{
    switch (action.type){
        case 'DELETE':
            return state.removeByID(action.id);
        default: return state;
    }
}

export default ProductsReducer;