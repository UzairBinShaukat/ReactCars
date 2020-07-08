import React, { Component } from "react";
import Navbar from "./components/navbar";
import ContactList from "./container/contactList";
import ContactForm from "./container/contactForm";
import "./App.css";

class App extends Component {
  state = {
    contacts: [
      {
        name: "Junaid",
        phone: "0306",
        email: "junaid@gmail.com",
        address: "Muzaffargarh",
      },
      {
        name: "Shan",
        phone: "0304",
        email: "shan@gmail.com",
        address: "Muzaffargarh",
      },
    ],
    view: "table",
  };
  handleNew = ({ name, phone, email, address }) => {
    let added = [
      ...this.state.contacts,
      {
        name: name,
        phone: phone,
        email: email,
        address: address,
      },
    ];
    this.setState({ contacts: added, view: "table" });
  };
  handleAddForm = () => {
    this.setState({ view: "addForm" });
  };
  handleAllContacts = () => {
    this.setState({ view: "table" });
  };
  render() {
    let elementTobeRender;
    if (this.state.view === "table") elementTobeRender = <ContactList />;
    else if (this.state.view === "addForm") elementTobeRender = <ContactForm />;
    return (
      <React.Fragment>
        <Navbar
          onAddForm={this.handleAddForm}
          onAllContacts={this.handleAllContacts}
        />
        {elementTobeRender}
      </React.Fragment>
    );
  }
}

export default App;
