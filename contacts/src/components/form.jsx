import React, { Component } from "react";
class Form extends Component {
  state = {
    name: "",
    phone: "",
    email: "0",
    address: "",
  };
  handleInputs = (event) => {
    const target = event.target;
    if (target.id === "name") this.state.name = target.value;
    else if (target.id === "phone") this.state.phone = target.value;
    else if (target.id === "email") this.state.email = target.value;
    else this.state.address = target.value;
  };
  render() {
    return (
      <div className="p-3 mb-2 bg-dark text-white">
        <div className="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={this.handleInputs}
          />
        </div>
        <div className="form-group">
          <label for="phone">Phone</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            onChange={this.handleInputs}
          />
        </div>
        <div className="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={this.handleInputs}
          />
        </div>
        <div className="form-group">
          <label for="address">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            onChange={this.handleInputs}
          />
        </div>
        <button
          onClick={() => {
            this.props.onSubmitForm({
              name: this.state.name,
              phone: this.state.phone,
              email: this.state.email,
              address: this.state.address,
            });
          }}
          className="btn btn-secondary btn-sm m-2"
        >
          Submit
        </button>
      </div>
    );
  }
}

export default Form;
