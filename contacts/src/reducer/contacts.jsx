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
  if (action.type === "ADD_CONTACT") {
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
  } else if (action.type === "DELETE_CONTACT") {
    return state.filter((contact) => contact.id !== action.id);
  } else return state;
};
export default contacts;
