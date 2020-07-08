import { connect } from "react-redux";
import Table from "../components/table";
import { deleteContact } from "../actions";
const mapStateToProps = (state) => ({
  contacts: state.contacts,
});
const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(deleteContact(id)),
  onEdit: () => console.log("edit"),
});
export default connect(mapStateToProps, mapDispatchToProps)(Table);
