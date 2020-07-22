import React, { useEffect } from "react";
import { connect } from "react-redux";
import { deleteCar, updateCar, delCar } from "../../redux/actions/carsActions";
import { removeFromCart, addToCart } from "../../redux/actions/userActions";
import { Link } from "react-router-dom";

const Car = (props) => {
  return (
    <div className="card bg-dark" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.car.modelName}</h5>
        <p className="card-text">
          <strong>Company: </strong>
          {props.car.company}
          <br />
          <strong>PKR: </strong>
          {props.car.price}
          <br />
          <strong>Description:</strong>
          <br />
          {props.car.description}
        </p>

        {props.userRole === "admin" ? (
          <div>
            <Link to={"/edit-car/" + props.car.id}>
              <button className="btn btn-secondary m-2">Edit</button>
            </Link>

            <button
              onClick={() => props.handleDelete(props.car.id)}
              className="btn btn-danger m-2"
            >
              Delete
            </button>
          </div>
        ) : props.userRole === "customer" ? (
          <button
            onClick={() => handleUpdateUserInfo(props, true)}
            className="btn btn-primary m-2"
          >
            Add to Cart
          </button>
        ) : (
          <button
            onClick={() => handleUpdateUserInfo(props, false)}
            className="btn btn-danger"
          >
            Remove from Cart
          </button>
        )}
      </div>
    </div>
  );
};

const handleUpdateUserInfo = (props, addingToCart) => {
  if (addingToCart) {
    const {
      user,
      car,
      handleAddToCart,
      handleDelCar,
      handleUpdateCarInfo,
    } = props;
    const updatedCar = { ...car, user_id: user.id };
    const updatedUser = { ...user, ownedCars: [...user.ownedCars, updatedCar] };
    handleAddToCart(updatedUser);
    handleDelCar(car);
    handleUpdateCarInfo(updatedCar);
  } else {
    const {
      user,
      car,
      handleRemoveFromCart,
      handleDelCar,
      handleUpdateCarInfo,
    } = props;
    const updatedUser = {
      ...user,
      ownedCars: user.ownedCars.filter((item) => item.id !== car.id),
    };
    handleRemoveFromCart(updatedUser);
    handleDelCar(car);
    handleUpdateCarInfo({ ...car, user_id: 0 });
  }
};

const mapStateToProps = (state) => ({
  user: state.authUserInfo.user,
});

const mapDispatchToProps = (dispatch) => ({
  handleDelete: (id) => dispatch(deleteCar(id)),
  handleDelCar: (car) => dispatch(delCar(car)),
  handleAddToCart: (updatedUser) => dispatch(addToCart(updatedUser)),
  handleRemoveFromCart: (updatedUser) => dispatch(removeFromCart(updatedUser)),
  handleUpdateCarInfo: (updatedCar) => dispatch(updateCar(updatedCar)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Car);
