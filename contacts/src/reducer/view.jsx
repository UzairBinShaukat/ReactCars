const views = (state = { view: "TABLE_VIEW" }, action) => {
  switch (action.type) {
    case "SET_TABLE_VIEW":
    case "SET_FORM_VIEW":
      return { view: action.view };
    case "SET_EDIT_VIEW":
      return { view: action.view, id: action.id };
    default:
      return state;
  }
};
export default views;
