import * as actionType from "../actions/const/constants";
const initialState = [
  {
    id: 0,
    name: "Junaid",
    phone: "0306",
    email: "junaid@gmail.com",
    address: "Muzaffargarh",
  },
];

const contacts = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_CONTACT:
      return [...state, action.newContact];
    case actionType.DELETE_CONTACT:
      return state.filter((contact) => contact.id !== action.id);
    case actionType.EDIT_CONTACT:
      return state.map((contact) =>
        contact.id === action.editedContact.id ? action.editedContact : contact
      );
    default:
      return state;
  }
};
export default contacts;
