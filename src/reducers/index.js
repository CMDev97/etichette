import {combineReducers} from "redux";
import ModalReducer from "./ModalReducer";
import ProductsReducer from "./ProductsReducer";
import EditorReducer from "./EditorReducer";
import IvaReducer from "./IvaReducer";

const rootReducer = combineReducers({
    modal: ModalReducer,
    products : ProductsReducer,
    editor: EditorReducer,
    ivasReducer: IvaReducer
});

export default rootReducer;