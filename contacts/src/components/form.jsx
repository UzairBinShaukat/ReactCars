import React from "react";
const Form = () => {
  return (
    <form className="p-3 mb-2 bg-dark text-white">
      <div className="form-group">
        <label for="name">Name</label>
        <input type="text" className="form-control" id="name" />
      </div>
      <div className="form-group">
        <label for="phone">Phone</label>
        <input type="text" className="form-control" id="nphoneame" />
      </div>
      <div className="form-group">
        <label for="email">Email</label>
        <input type="email" className="form-control" id="email" />
      </div>
      <div className="form-group">
        <label for="address">Address</label>
        <input type="text" className="form-control" id="address" />
      </div>
      <button className="btn btn-secondary btn-sm m-2">Submit</button>
    </form>
  );
};

export default Form;
