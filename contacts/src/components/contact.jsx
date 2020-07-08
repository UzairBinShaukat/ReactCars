import React, { Component } from "react";
const Contact = (props) => {
  const { contacts, onDelete, onEdit } = props;
  const list = contacts.map((contact) => {
    return (
      <tr key={contact.id}>
        <td>{contact.name}</td>
        <td>{contact.phone}</td>
        <td>{contact.email}</td>
        <td>{contact.address}</td>
        <td>
          <button
            className="btn btn-secondary btn-sm m-2"
            onClick={() => onDelete(contact.id)}
          >
            Delete
          </button>
        </td>
        <td>
          <button
            className="btn btn-secondary btn-sm m-2"
            onClick={() => onEdit(contact.id)}
          >
            Edit
          </button>
        </td>
      </tr>
    );
  });
  return list;
};
export default Contact;
