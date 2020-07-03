import React, { Component } from "react";
import Navbar from "./components/navbar";
import Table from "./components/table";
import Form from "./components/form";
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
    this.setState({ contacts: this.state.contacts, view: "addForm" });
  };
  render() {
    let elementTobeRender;
    if (this.state.view === "table")
      elementTobeRender = <Table contacts={this.state.contacts} />;
    else if (this.state.view === "addForm")
      elementTobeRender = <Form onSubmitForm={this.handleNew} />;
    return (
      <React.Fragment>
        <Navbar onAddForm={this.handleAddForm} />
        {elementTobeRender}
      </React.Fragment>
    );
  }
}

export default App;
