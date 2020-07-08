import { connect } from "react-redux";
import { setFormView, setTableView } from "../actions";
import App from "../App";
const mapStateToProps = (state) => ({
  contacts: state.contacts,
  view: state.views,
});
const mapDispatchToProps = (dispatch) => ({
  onFormView: () => dispatch(setFormView()),
  onTableView: () => dispatch(setTableView()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
