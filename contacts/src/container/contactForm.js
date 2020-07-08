import { connect } from "react-redux";
import Form from "../components/form";
import { addContact, setTableView } from "../actions";
const mapStateToProps = (state) => ({ myProp: "uzair" });
const mapDispatchToProps = (dispatch) => ({
  onSubmitForm: ({ name, phone, email, address }) =>
    dispatch(addContact(name, phone, email, address)),
  onViewChange: () => dispatch(setTableView()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Form);
