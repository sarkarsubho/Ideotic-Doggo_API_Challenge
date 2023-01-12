import * as types from "./action.types";
import axios from "axios";
export const Getdata = () => (dispatch) => {
  dispatch({ type: types.GETDATAREQUESTE });

  axios
    .get("https://dog.ceo/api/breeds/list/all")
    .then((res) => {
      console.log(res.data)
      dispatch({ type: types.GETDATASUCCESS, payload: res.data.message });
    })
    .catch((er) => {
      dispatch({ type: types.GETDATAERROR });
    });
};



