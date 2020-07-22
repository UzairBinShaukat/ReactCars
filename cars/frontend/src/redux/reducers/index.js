import { combineReducers } from "redux";
import userReducer from "./userReducer";
import carsReducer from "./carsReducer";
import authReducer from "./authReducer";

export default combineReducers({
  users: userReducer,
  cars: carsReducer,
  authUserInfo: authReducer,
});
