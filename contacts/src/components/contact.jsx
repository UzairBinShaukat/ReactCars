import React, { Component } from "react";
class Contact extends Component {
  render() {
    const { contacts, onDelete, onEdit } = this.props;

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
            <button className="btn btn-secondary btn-sm m-2" onClick={onEdit}>
              Edit
            </button>
          </td>
        </tr>
      );
    });
    return list;
  }
}

export default Contact;
