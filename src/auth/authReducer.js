import { LOGIN, LOGOUT } from "./authConstants";

const initialState = {};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        authenticated: true,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        authenticated: false,
        user: {},
      };
    default:
      return state;
  }
};
