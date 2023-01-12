import { loadData, saveData, removeData } from "../../utils/localStorage";
import * as types from "./action.types";
const initState = {
  isLoading: false,
  isError: false,
  isAuth: !!loadData("token") || false,
  token: loadData("token") || "",
  user: loadData("user") || {},
};

export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.REGISTERREQUEST:
      return { ...state, isLoading: true, isError: false };

    case types.REGISTERSUCCESS:
      return { ...state, isLoading: false, isError: false };

    case types.REGISTERREJECTED:
      return { ...state, isLoading: false, isError: true };

    case types.LOGINREQUEST:
      return { ...state, isLoading: true, isError: false };

    case types.LOGINSUCCESS:
      saveData("token", payload.token);
      saveData("user", payload.user);
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: true,
        token: payload.token,
        user: payload.user,
      };
    case types.LOGINREJECTED:
      return { ...state, isLoading: false, isError: true };

    case types.LOGOUT:
      removeData("token");
      removeData("user");
      return { ...state, isAuth: false, token: "", user: {} };
    default:
      return state;
  }
};
