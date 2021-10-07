import {combineReducers} from "redux";
import DrawerReducer from "./DrawerReducer";
import ProductsReducer from "./ProductsReducer";
import BalanceReducer from "./BalanceReducer";
import IvaReducer from "./IvaReducer";
import {ModalReducer} from "./ModalReducer";
import CategoryReducer from "./CategoryReducer";
import {FormReducer} from "./FormReducer";
import TagDietaReducer from "./TagDietaReducer";
import IngredientReducer from "./IngredientReducer";
import SellReducer from "./SellReducer";
import {ProvinceReducer} from "./ProvinceReducer";
import {OptionProductReducer} from "./OptionProductReducer";
import {StepsReducer} from "./StepsReducer";

export const rootReducer = combineReducers({
    drawer: DrawerReducer,
    modal:ModalReducer,
    products : ProductsReducer,
    balance: BalanceReducer,
    ivasReducer: IvaReducer,
    category: CategoryReducer,
    form:FormReducer,
    tagDieta: TagDietaReducer,
    ingredient:IngredientReducer,
    sell:SellReducer,
    province:ProvinceReducer,
    optionProduct:OptionProductReducer,
    steps:StepsReducer
});
