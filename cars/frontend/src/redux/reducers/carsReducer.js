import * as actionTypes from "../actions/constants";
import { carsInitial } from "./initialStates";

const carsReducer = (state = carsInitial, action) => {
  switch (action.type) {
    case actionTypes.ADD_CAR:
      return [...state, action.payload.car];
    case actionTypes.DEL_CAR:
      return state.filter((car) => car.id != action.payload.car.id);
    case actionTypes.ALL_CARS:
      if (state.length !== action.payload.data.length)
        return action.payload.data;
      return state;
    case actionTypes.EDIT_CAR:
      return state.map((car) =>
        car.id == action.payload.editedCar.id ? action.payload.editedCar : car
      );
    default:
      return state;
  }
};

export default carsReducer;
