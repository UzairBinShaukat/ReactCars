import { connect } from "react-redux";
import Form from "../components/form";
import { addContact, setTableView, editContact } from "../actions";
const mapStateToProps = (state) => ({
  view: state.views,
  contacts: state.contacts,
});
const mapDispatchToProps = (dispatch) => ({
  onSubmitForm: ({ name, phone, email, address }) =>
    dispatch(addContact(name, phone, email, address)),
  onViewChange: () => dispatch(setTableView()),
  onEdit: ({ id, name, phone, email, address }) =>
    dispatch(editContact(id, name, phone, email, address)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Form);
