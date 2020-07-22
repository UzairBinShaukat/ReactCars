import React from "react";
import { connect } from "react-redux";
import Header from "../Global/header";
import { Link } from "react-router-dom";
import { addCar } from "../../redux/actions/carsActions";
import Form from "./form";

const AddCar = (props) => {
  return (
    <div>
      {props.authUser.user.role === "admin" ? (
        <div>
          <Header user={props.authUser.user} />
          <h1 className="text-center">Add a New Car</h1>
          <Form onAddCar={props.onAddCar} id={props.match.params.id} />
        </div>
      ) : (
        <div className="text-center">
          <h1>Its and admin Area baby</h1>
          <p>Go and come up with admin credentials</p>
          <Link to={"/login"}>
            <button className="btn btn-dark">Back to Login</button>
          </Link>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  authUser: state.authUserInfo,
  cars: state.cars,
});

const mapDispatchToProps = (dispatch) => ({
  onAddCar: (car) => dispatch(addCar(car)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCar);
