import axios from "axios";

// Shortcut util
import { axiosWithAuth } from "../utils/axiosWithAuth";

// URIs
const URL = `https://replatedb.herokuapp.com`;
const URI_LOGIN = `${URL}/auth/login`;

// Action Tokens
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = 'LOGOUT';

export const login = creds => dispatch => {
  dispatch({
    type: LOGIN_START
  });
  return axios
    .post(URI_LOGIN, {
      email: creds.email,
      password: creds.password
    })
    .then(res => {
      const token = res.data.token;
      localStorage.setItem("token", token);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: token
      });
    })
    .catch(err => {
      console.log(err.data);
    });
};

export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT
  })
  return;
}