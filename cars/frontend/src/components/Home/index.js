import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Header from "../Global/header";
import CarsList from "./carsList";
import { getAllCars } from "../../redux/actions/carsActions";

const Home = (props) => {
  const [fetched, setFetched] = useState(false);
  useEffect(() => {
    async function fetchData() {
      await props.handleAllCars();
      setFetched(true);
    }
    if (!fetched) fetchData();
  });
  return (
    <div>
      {props.authUser.isAuthUser ? (
        <div>
          <Header user={props.authUser.user} />
          <h1 className="m-2 text-center">Available Cars</h1>
          <div style={{ width: "100%", padding: "5px" }}>
            <CarsList
              cars={props.cars}
              userRole={props.authUser.user.role}
              view={"Home"}
            />
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

const mapDispatchToProps = (dispatch) => ({
  handleAllCars: () => dispatch(getAllCars()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
