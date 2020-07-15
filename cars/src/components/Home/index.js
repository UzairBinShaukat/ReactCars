import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Header from "../Global/header";
import CarsList from "./carsList";

const Home = (props) => {
  return (
    <div>
      {props.authUser.isAuthUser ? (
        <div>
          <Header user={props.authUser.user} />
          <h1 className="m-2 text-center">Available Cars</h1>
          <div style={{ width: "100%", padding: "5px" }}>
            <CarsList cars={props.cars} userRole={props.authUser.user.role} />
          </div>
        </div>
      ) : (
        <Redirect to={"/login"} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
  cars: state.cars,
  authUser: state.authUserInfo,
});

export default connect(mapStateToProps)(Home);
