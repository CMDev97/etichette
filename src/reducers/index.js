import {combineReducers} from "redux";
import DrawerReducer from "./DrawerReducer";
import BalanceFormReducer from "./BalanceFormReducer";
import {ModalReducer} from "./ModalReducer";
import {FormReducer} from "./FormReducer";
import SellReducer from "./SellReducer";
import {ProvinceReducer} from "./ProvinceReducer";

export const rootReducer = combineReducers({
    drawer: DrawerReducer,
    modal:ModalReducer,
    formBalanceReducer: BalanceFormReducer,
    form:FormReducer,
    sell:SellReducer,
    province:ProvinceReducer,
});
