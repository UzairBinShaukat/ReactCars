import React from "react";
import { connect } from "react-redux";
import Header from "../Global/header";
import CarsList from "../Home/carsList";
import { Redirect } from "react-router-dom";

const Cart = (props) => {
  return (
    <div>
      {props.authUser.isAuthUser ? (
        <div>
          <Header user={props.authUser.user} />
          <h1 className="m-2 text-center">My Cars (Cart)</h1>
          <div style={{ width: "100%", padding: "5px" }}>
            <CarsList cars={props.authUser.user.ownedCars} userRole="cart" />
          </div>
        </div>
      ) : (
        <Redirect to={"/login"} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  authUser: state.authUserInfo,
});

export default connect(mapStateToProps)(Cart);
