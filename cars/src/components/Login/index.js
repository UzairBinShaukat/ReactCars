import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { processUserCredentials } from "../../redux/actions/userActions";

class Login extends Component {
  state = { username: "", password: "", formView: true };

  handleSubmit = (event) => {
    event.preventDefault();
    const inputUser = {
      username: this.state.username,
      password: this.state.password,
    };
    if (inputUser != null) {
      this.props.processUserCredentials(inputUser, this.props.users);
      this.setState({ ...this.state, formView: false });
    } else console.log("failed");
  };

  handleChange = (event) => {
    switch (event.target.type) {
      case "text":
        this.state.username = event.target.value;
        break;
      case "password":
        this.state.password = event.target.value;
        break;
      default:
        break;
    }
  };
  render() {
    const render = this.state.formView ? (
      <div>
        <h1 className="text-center mt-5">You need to login first</h1>
        <form className={"p-5 mb-2"}>
          {this.props.isIncorrectDetails === "incorrect" ? (
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
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <button
              onClick={this.handleSubmit}
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
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
  isIncorrectDetails: state.authUserInfo.user,
});

const mapDispatchToProps = (dispatch) => ({
  processUserCredentials: (user, userList) =>
    dispatch(processUserCredentials(user, userList)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
