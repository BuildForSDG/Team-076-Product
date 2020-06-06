import { LOGIN, LOGOUT } from "./authConstants";

export const login = (userObj) => {
  return {
    type: LOGIN,
    payload: userObj,
  };
};
export const logout = () => {
  return {
    type: LOGOUT,
  };
};
