const views = (state = "", action) => {
  switch (action.type) {
    case "SET_TABLE_VIEW":
    case "SET_ADD_CONTACT_VIEW":
      return action.view;
    default:
      return state;
  }
};
export default views;
