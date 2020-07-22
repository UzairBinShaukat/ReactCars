import * as actionTypes from "./constants/index";
import * as EndPoints from "./constants/EndPoints";
import { post } from "./api";

export const login = (data) => ({
  type: actionTypes.LOGIN,
  payload: data,
});

export const processUserCredentials = (user) => {
  return post(EndPoints.USERS, user, login);
};

export const addToCart = (updatedUser) => ({
  type: actionTypes.ADD_TO_CART,
  payload: {
    updatedUser,
  },
});

export const removeFromCart = (updatedUser) => ({
  type: actionTypes.REMOVE_FROM_CART,
  payload: {
    updatedUser,
  },
});

export const logout = () => ({
  type: actionTypes.LOGOUT,
});

export const saveUserData = (updatedUser) => ({
  type: actionTypes.SAVE_USER_DATA,
  payload: {
    updatedUser,
  },
});
