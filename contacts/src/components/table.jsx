import React from "react";
import Contact from "./contact";
const Table = (props) => {
  return (
    <table className="table table-striped table-dark">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">Address</th>
          <th scope="col" colSpan="2">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <Contact
          contacts={props.contacts}
          onDelete={props.onDelete}
          onEdit={props.onEdit}
        />
      </tbody>
    </table>
  );
};

export default Table;
