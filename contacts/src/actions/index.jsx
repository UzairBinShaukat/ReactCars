import * as actionType from "./const/constants";
let nextId = 0;
export const addContact = (name, phone, email, address) => ({
  type: actionType.ADD_CONTACT,
  id: ++nextId,
  name,
  phone,
  email,
  address,
});
export const deleteContact = (id) => ({
  type: actionType.DELETE_CONTACT,
  id,
});
export const editContact = (id, name, phone, email, address) => ({
  type: actionType.EDIT_CONTACT,
  id,
  name,
  phone,
  email,
  address,
});
export const setEditView = (id) => ({
  type: actionType.SET_EDIT_VIEW,
  view: actionType.EDIT_VIEW,
  id,
});
export const setTableView = () => ({
  type: actionType.SET_TABLE_VIEW,
  view: actionType.TABLE_VIEW,
});
export const setFormView = () => ({
  type: actionType.SET_FORM_VIEW,
  view: actionType.FORM_VIEW,
});
