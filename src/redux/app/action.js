import * as types from "./action.types";
import axios from "axios";
export const Getdata = (payload) => (dispatch) => {
  dispatch({ type: types.GETDATAREQUESTE });

  axios
    .get("")
    .then((res) => {
      dispatch({ type: types.GETDATASUCCESS, payload: res.data });
    })
    .catch((er) => {
      dispatch({ type: types.GETDATAERROR });
    });
};



