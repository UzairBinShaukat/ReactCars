import * as actionTypes from "./constants/index";

export const processUserCredentials = (user, userList) => ({
  type: actionTypes.PROCESS_USER_CREDENTIALS,
  payload: {
    user: checkCred(user, userList),
  },
});

const checkCred = (inputUser, userList) => {
  const found = userList.find(
    (user) =>
      user.username.toLowerCase() === inputUser.username.toLowerCase() &&
      user.password === inputUser.password
  );
  return found != null ? found : "incorrect";
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
