import React, { Component } from "react";
class Form extends Component {
  render() {
    return (
      <div className="p-3 mb-2 bg-dark text-white">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" ref="name" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="text" className="form-control" ref="phone" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" ref="email" />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" className="form-control" ref="address" />
        </div>
        <button
          onClick={() => {
            this.props.onSubmitForm({
              name: this.refs.name.value,
              phone: this.refs.phone.value,
              email: this.refs.email.value,
              address: this.refs.address.value,
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
