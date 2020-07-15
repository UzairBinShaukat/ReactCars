import React from "react";
import Car from "./car";

const CarsList = (props) => {
  return (
    <ul className="row" style={{ display: "flex", listStyleType: "none" }}>
      {props.cars.map((car) => (
        <li key={car.id} className="col-sm m-2">
          <Car car={car} userRole={props.userRole} />
        </li>
      ))}
    </ul>
  );
};

export default CarsList;
