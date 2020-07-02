import React, { Component } from "react";
import Navbar from "./components/navbar";
import Table from "./components/table";
import Form from "./components/form";
import "./App.css";
class App extends Component {
  state = {
    contacts: [
      { name: "sdf", phone: "asd", email: "dfr", address: "sde" },
      { name: "sdf", phone: "asd", email: "dfr", address: "sde" },
    ],
    view: "table",
  };
  handleNew = ({ name, phone, email, address }) => {
    console.log(phone);
    let added = [
      ...this.state.contacts,
      {
        name: name,
        phone: phone,
        email: email,
        address: address,
      },
    ];
    this.setState({ contacts: added });
  };
  handleAddForm = () => {
    this.setState({ contacts: this.state.contacts, view: "addForm" });
  };
  render() {
    let elementTobeRender;
    if (this.state.view === "table")
      elementTobeRender = <Table contacts={this.state.contacts} />;
    else if (this.state.view === "addForm") elementTobeRender = <Form />;
    return (
      <React.Fragment>
        <Navbar onAddForm={this.handleAddForm} />
        {elementTobeRender}
      </React.Fragment>
    );
  }
}

export default App;
