import { combineReducers } from "redux";
import { modalReducer } from "../Modals/modalReducer";
import { authReducer } from "../auth/authReducer";
import { blogReducer } from "../components/blog/blogReducer";

const rootReducer = combineReducers({
  modals: modalReducer,
  auth: authReducer,
  blogPost: blogReducer
});

export default rootReducer;
