import { connect } from "react-redux";
import Form from "../components/form";
import { addContact, setTableView, editContact } from "../actions";
const mapStateToProps = (state) => ({
  view: state.views,
  contacts: state.contacts,
});
const mapDispatchToProps = (dispatch) => ({
  onSubmitForm: (contact) => dispatch(addContact(contact)),
  onViewChange: () => dispatch(setTableView()),
  onEdit: (contact) => dispatch(editContact(contact)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Form);
