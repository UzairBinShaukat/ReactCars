import React, { Component } from "react";
class Contact extends Component {
  render() {
    const { contacts } = this.props;
    const list = contacts.map((contact) => {
      return (
        <tr>
          <td>{contact.name}</td>
          <td>{contact.phone}</td>
          <td>{contact.email}</td>
          <td>{contact.address}</td>
        </tr>
      );
    });
    return list;
  }
}

export default Contact;
