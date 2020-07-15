import * as actionTypes from "./constants/index";

let id = 2;

export const addCar = (car) => ({
  type: actionTypes.ADD_CAR,
  payload: {
    car: { ...car, id: ++id },
  },
});

export const delCar = (car) => ({
  type: actionTypes.DEL_CAR,
  payload: {
    car,
  },
});

export const editCar = (editedCar) => ({
  type: actionTypes.EDIT_CAR,
  payload: {
    editedCar,
  },
});
