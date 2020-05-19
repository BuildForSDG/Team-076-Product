import { combineReducers } from "redux";
import { modalReducer } from "../Modals/modalReducer";
import { authReducer } from "../auth/authReducer";

const rootReducer = combineReducers({
  modals: modalReducer,
  auth: authReducer,
});

export default rootReducer;
