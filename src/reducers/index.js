import {combineReducers} from "redux";
import ModalReducer from "./ModalReducer";
import ProductsReducer from "./ProductsReducer";
import EditorReducer from "./EditorReducer";

const rootReducer = combineReducers({
    modal: ModalReducer,
    products : ProductsReducer,
    editor: EditorReducer
});

export default rootReducer;