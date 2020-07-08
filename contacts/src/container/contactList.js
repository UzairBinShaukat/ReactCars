import { connect } from "react-redux";
import Table from "../components/table";
import { deleteContact, setEditView } from "../actions";
const mapStateToProps = (state) => ({
  contacts: state.contacts,
});
const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(deleteContact(id)),
  onEdit: (id) => dispatch(setEditView(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Table);
