import React from "react";
import { Link } from "react-router-dom";
import { logout, saveUserData } from "../../redux/actions/userActions";
import { connect } from "react-redux";

const Header = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <span className="navbar-brand">Welcome {props.user.username}</span>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to={"/"} className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/login"} className="nav-link">
              Login
            </Link>
          </li>
        </ul>

        {props.user.role === "admin" ? (
          <Link to={"/add-car"}>
            <button className="btn btn-secondary btn-sm m-2">Add Car</button>
          </Link>
        ) : (
          <Link to={"/cart"} className="m-2" style={{ color: "white" }}>
            Cart&nbsp;
            <span className="badge badge-secondary badge-pill">
              {props.user.ownedCars.length}
            </span>
          </Link>
        )}
        <button
          onClick={() => {
            props.handleSaveUserData(props.user);
            props.onLogout();
          }}
          className="btn btn-secondary btn-sm m-2"
        >
          Logout
        </button>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.authUserInfo.user,
});

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(logout()),
  handleSaveUserData: (updatedUser) => dispatch(saveUserData(updatedUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
