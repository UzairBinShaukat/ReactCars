import * as actionType from "./const/constants";
let nextId = 0;
export const addContact = (contact) => ({
  type: actionType.ADD_CONTACT,
  newContact: contact,
});
export const deleteContact = (id) => ({
  type: actionType.DELETE_CONTACT,
  id,
});

export const editContact = (contact) => ({
  type: actionType.EDIT_CONTACT,
  editedContact: contact,
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
