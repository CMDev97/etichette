import {combineReducers} from "redux";
import DrawerReducer from "./DrawerReducer";
import ProductsReducer from "./ProductsReducer";
import BalanceReducer from "./BalanceReducer";
import {ModalReducer} from "./ModalReducer";
import {FormReducer} from "./FormReducer";
import TagDietaReducer from "./TagDietaReducer";
import IngredientReducer from "./IngredientReducer";
import SellReducer from "./SellReducer";
import {ProvinceReducer} from "./ProvinceReducer";
import {OptionProductReducer} from "./OptionProductReducer";

export const rootReducer = combineReducers({
    drawer: DrawerReducer,
    modal:ModalReducer,
    products : ProductsReducer,
    balance: BalanceReducer,
    form:FormReducer,
    tagDieta: TagDietaReducer,
    ingredient:IngredientReducer,
    sell:SellReducer,
    province:ProvinceReducer,
    optionProduct:OptionProductReducer,
});
