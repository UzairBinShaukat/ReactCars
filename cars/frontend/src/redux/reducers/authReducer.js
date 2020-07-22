import * as actionTypes from "../actions/constants";
import { authInitial } from "./initialStates";

export default (state = authInitial, action) => {
  switch (action.type) {
    case actionTypes.PROCESS_USER_CREDENTIALS:
      return {
        user: action.payload.user,
        isAuthUser: action.payload.user !== "incorrect" ? true : false,
      };
    case actionTypes.ADD_TO_CART:
      return { ...state, user: action.payload.updatedUser };
    case actionTypes.REMOVE_FROM_CART:
      return { ...state, user: action.payload.updatedUser };
    case actionTypes.LOGIN:
      if (action.payload.status)
        return {
          user: { ...action.payload.data[0], ownedCars: [] },
          isAuthUser: true,
        };
      else
        return {
          user: action.payload.data,
          message: action.payload.message,
          isAuthUser: false,
        };
    case actionTypes.LOGOUT:
      return authInitial;
    default:
      return state;
  }
};
