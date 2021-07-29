import {combineReducers} from "redux";
import ModalReducer from "./ModalReducer";

const rootReducer = combineReducers({
    modal: ModalReducer
});

export default rootReducer;