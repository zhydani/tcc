export const addContact = (newContact) => ({
    type: 'ADD_CONTACT',
    payload: newContact
});

export const removeContact = (index) => ({
    type: 'REMOVE_CONTACT',
    payload: index
});
  