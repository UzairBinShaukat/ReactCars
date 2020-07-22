import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { processUserCredentials } from "../../redux/actions/userActions";

const Login = (props) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [formView, setFormView] = useState(true);

  const render = formView ? (
    <div>
      <h1 className="text-center mt-5">You need to login first</h1>
      <form className={"p-5 mb-2"}>
        {props.isIncorrectDetails === "incorrect" ? (
          <span className="bg-light text-danger p-1">
            Incorrect Credentials. Please try again.
          </span>
        ) : (
          <span></span>
        )}

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            onChange={(event) =>
              setUser({ ...user, username: event.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            onChange={(event) =>
              setUser({ ...user, password: event.target.value })
            }
          />
        </div>
        <div className="form-group">
          <button
            onClick={async function (event) {
              event.preventDefault();
              await props.processUserCredentials(user);
              setFormView(false);
              console.log(formView);
            }}
            className="form-control bg-secondary text-light"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  ) : (
    <Redirect to={"/"} />
  );
  return render;
};

const mapStateToProps = (state) => ({
  users: state.users,
  isIncorrectDetails: state.authUserInfo.user,
});

const mapDispatchToProps = (dispatch) => ({
  processUserCredentials: (user) => dispatch(processUserCredentials(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
