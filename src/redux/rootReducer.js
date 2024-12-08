import { combineReducers } from "redux";
import { headerReducer } from "./reducers/headerReducer";
import { footerReducer } from "./reducers/footerReducer";
import { mainPageReducer } from "./reducers/mainPageReducer";
import { exchangeReducer } from "./reducers/exchangeReducer";


export const rootReducer = combineReducers({
    headerReducer,
    footerReducer,
    mainPageReducer,
    exchangeReducer
})