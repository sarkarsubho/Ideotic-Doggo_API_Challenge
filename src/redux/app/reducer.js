import * as types from "./action.types";

const initState = {
  breeds: [],
  loading: false,
  error: true,
};

export const appReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.GETDATAREQUESTE:
      return { ...state, loading: true, error: false };

    case types.GETDATASUCCESS:
      return { ...state, loading: false, error: false, breeds: payload };

    case types.GETDATAERROR:
      return { ...state, loading: false, error: true };

    default:
      return state;
  }
};
