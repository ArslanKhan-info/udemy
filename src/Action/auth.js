import {
    SET_AUTH_USER,
    RESET_AUTH_STATE
  } from "type";
  import * as api from "../api";



export const registerAction = (userData) => api.Register(userData);
export const loginAction = (userData) => api.Login(userData);
export const onAuthChange = (authuser) => api.onAuthChange(authuser);


export const resetAuthState = () => ({type: RESET_AUTH_STATE})

export const storeAuthUser = (user) => (dispatch) => {
  if (user) {
    return api
      .getAuthProfile(user.uid)
      .then((res) => dispatch({ type: SET_AUTH_USER, user: res }));
  }
  return dispatch({ type: SET_AUTH_USER, user:null })
};

export const logout =()=>dispatch=>
  api
    .Logout()
    .then(res=>dispatch({ type: SET_AUTH_USER, user:null }))
    .catch(err=>console.log(err))
