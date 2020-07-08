import React, { Component } from "react";
import * as actionType from "../actions/const/constants";
class Form extends Component {
  render() {
    const { view, id } = this.props.view;
    const contact = this.props.contacts.filter((contact) => contact.id === id);
    const edit = view === actionType.EDIT_VIEW ? true : false;
    return (
      <div className="p-3 mb-2 bg-dark text-white">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            defaultValue={edit ? contact[0].name : ""}
            ref="name"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            defaultValue={edit ? contact[0].phone : ""}
            className="form-control"
            ref="phone"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            defaultValue={edit ? contact[0].email : ""}
            className="form-control"
            ref="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            defaultValue={edit ? contact[0].address : ""}
            className="form-control"
            ref="address"
          />
        </div>
        <button
          onClick={() => {
            edit
              ? this.props.onEdit({
                  id,
                  name: this.refs.name.value,
                  phone: this.refs.phone.value,
                  email: this.refs.email.value,
                  address: this.refs.address.value,
                })
              : this.props.onSubmitForm({
                  name: this.refs.name.value,
                  phone: this.refs.phone.value,
                  email: this.refs.email.value,
                  address: this.refs.address.value,
                });
            this.props.onViewChange();
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
