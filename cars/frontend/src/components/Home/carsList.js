import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "./card";

const CarsList = (props) => {
  return props.view === "Cart" ? (
    <Grid
      container
      spacing={8}
      justify={"center"}
      style={{ paddingLeft: "50px", paddingRight: "50px" }}
    >
      {props.cars.map((car) => {
        if (car.user_id > 0) {
          return (
            <Grid key={car.id} item xs={12} sm={6} md={4} lg={3}>
              <Card car={car} userRole={props.userRole} />
            </Grid>
          );
        }
      })}
    </Grid>
  ) : (
    <Grid
      container
      spacing={8}
      justify={"center"}
      style={{ paddingLeft: "50px", paddingRight: "50px" }}
    >
      {props.cars.map((car) => {
        if (car.user_id === 0) {
          return (
            <Grid key={car.id} item xs={12} sm={6} md={4} lg={3}>
              <Card car={car} userRole={props.userRole} />
            </Grid>
          );
        }
      })}
    </Grid>
  );
};

export default CarsList;
