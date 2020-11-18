import axios from "axios";
import jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_CURRENT_USER } from "./authTypes";

//----Login User----
export const loginUser = (userData, history) => dispatch => {
  console.log(process.env.REACT_APP_URL)
  axios
    .post(process.env.REACT_APP_URL+"/login", userData)
    .then(res =>
      res.data.jwt
        ? (console.log("res.data.jwt", res.data.jwt),
          localStorage.setItem("jwtToken", res.data.jwt),
          // history.push("/admin/dashboard"),
          dispatch(setCurrentUser(jwt_decode(res.data.jwt))))
        : dispatch({
            type: GET_ERRORS,
            payload: res.data
          })
    )
    .catch(err => {
      console.log(err);
      // dispatch({
      //   type: GET_ERRORS,
      //   payload: err.response.data
      // });
    });
};

//---set logged in user---
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
