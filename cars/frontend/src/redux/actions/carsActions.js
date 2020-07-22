import * as actionTypes from "./constants/index";
import * as EndPoints from "./constants/EndPoints";
import { get, post, put, del } from "./api";

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

const allCars = ({ data }) => ({
  type: actionTypes.ALL_CARS,
  payload: {
    data,
  },
});

export const getAllCars = () => {
  return get(EndPoints.CARS, "", allCars);
};

export const updateCar = (editedCar) => {
  return put(EndPoints.CARS + "/" + editedCar.id, editedCar, getAllCars);
};

export const addNewCar = (car) => {
  return post(EndPoints.CARS, car, getAllCars);
};

export const deleteCar = (id) => {
  return del(EndPoints.CARS, id, getAllCars);
};
