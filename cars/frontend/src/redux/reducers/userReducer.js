import { userInitial } from "./initialStates";
import * as actionTypes from "../actions/constants";

const userReducer = (state = userInitial, action) => {
  switch (action.type) {
    case actionTypes.SAVE_USER_DATA:
      return state.map((user) =>
        user.id === action.payload.updatedUser.id
          ? action.payload.updatedUser
          : user
      );

    default:
      return state;
  }
};

export default userReducer;
