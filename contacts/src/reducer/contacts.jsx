import * as actionType from "../actions/const/constants";
const contacts = (
  state = [
    {
      id: 0,
      name: "Junaid",
      phone: "0306",
      email: "junaid@gmail.com",
      address: "Muzaffargarh",
    },
  ],
  action
) => {
  if (action.type === actionType.ADD_CONTACT) {
    return [
      ...state,
      {
        id: action.id,
        name: action.name,
        phone: action.phone,
        email: action.email,
        address: action.address,
      },
    ];
  } else if (action.type === actionType.DELETE_CONTACT) {
    return state.filter((contact) => contact.id !== action.id);
  } else if (action.type === actionType.EDIT_CONTACT) {
    return state.map((contact) =>
      contact.id === action.id
        ? {
            ...contact,
            name: action.name,
            phone: action.phone,
            email: action.email,
            address: action.address,
          }
        : contact
    );
  } else return state;
};
export default contacts;
