import {combineReducers} from "redux";
import ModalReducer from "./ModalReducer";
import ProductsReducer from "./ProductsReducer";

const rootReducer = combineReducers({
    modal: ModalReducer,
    products : ProductsReducer
});

export default rootReducer;