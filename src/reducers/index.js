import {combineReducers} from "redux";
import DrawerReducer from "./DrawerReducer";
import ProductsReducer from "./ProductsReducer";
import EditorReducer from "./EditorReducer";
import IvaReducer from "./IvaReducer";
import {ModalReducer} from "./ModalReducer";
import CategoryReducer from "./CategoryReducer";
import {FormReducer} from "./FormReducer";

export const rootReducer = combineReducers({
    drawer: DrawerReducer,
    modal:ModalReducer,
    products : ProductsReducer,
    editor: EditorReducer,
    ivasReducer: IvaReducer,
    category: CategoryReducer,
    form:FormReducer
});
