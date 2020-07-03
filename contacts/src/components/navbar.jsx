import React from "react";
const Navbar = (props) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Contacts
      </a>
      <button
        onClick={props.onAddForm}
        className="btn btn-secondary btn-sm m-2"
      >
        Add
      </button>
    </nav>
  );
};

export default Navbar;
