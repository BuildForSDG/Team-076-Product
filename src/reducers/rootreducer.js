import { combineReducers } from "redux";
import { modalReducer } from "../Modals/modalReducer";


const rootReducer = combineReducers({
    modals: modalReducer
})

export default rootReducer;