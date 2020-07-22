import React from "react";
import Car from "./car";

const CarsList = (props) => {
  console.log(props.cars);
  return props.view === "Cart" ? (
    <ul className="row" style={{ display: "flex", listStyleType: "none" }}>
      {props.cars.map((car) => {
        if (car.user_id > 0) {
          return (
            <li key={car.id} className="col-sm m-2">
              <Car car={car} userRole={props.userRole} />
            </li>
          );
        }
      })}
    </ul>
  ) : (
    <ul className="row" style={{ display: "flex", listStyleType: "none" }}>
      {props.cars.map((car) => {
        if (car.user_id === 0) {
          return (
            <li key={car.id} className="col-sm m-2">
              <Car car={car} userRole={props.userRole} />
            </li>
          );
        }
      })}
    </ul>
  );
};

export default CarsList;
