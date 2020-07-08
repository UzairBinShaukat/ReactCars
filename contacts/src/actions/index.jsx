let nextId = 0;
export const addContact = (name, phone, email, address) => ({
  type: "ADD_CONTACT",
  id: ++nextId,
  name,
  phone,
  email,
  address,
});
export const deleteContact = (id) => ({
  type: "DELETE_CONTACT",
  id,
});
export const editContact = (id) => ({
  type: "EDIT_CONTACT",
  id,
});
export const setTableView = () => ({
  type: "SET_TABLE_VIEW",
  view: "TABLE_VIEW",
});
