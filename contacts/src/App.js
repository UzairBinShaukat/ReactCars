import React, { Component } from "react";
import Navbar from "./components/navbar";
import ContactList from "./container/contactList";
import ContactForm from "./container/contactForm";
import * as actionType from "./actions//const/constants";
const App = (props) => {
  let elementTobeRender;
  let { view } = props.view;
  if (view === actionType.TABLE_VIEW) elementTobeRender = <ContactList />;
  else if (view === actionType.FORM_VIEW || view === actionType.EDIT_VIEW)
    elementTobeRender = <ContactForm />;
  return (
    <React.Fragment>
      <Navbar onAddForm={props.onFormView} onAllContacts={props.onTableView} />
      {elementTobeRender}
    </React.Fragment>
  );
};

export default App;
