const initialState = {
    contacts: []
  };
  
  const contactReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_CONTACT':
        const contactExists = state.contacts.find(contact => contact.recordID === action.payload.recordID);
        if (contactExists) {
          return { ...state };
        }
        return { ...state, contacts: [...state.contacts, action.payload] };
      case 'REMOVE_CONTACT':
        const newContacts = [...state.contacts];
        newContacts.splice(action.payload, 1);
        return { ...state, contacts: newContacts };
      default:
        return state;
    }
  };
  
  export default contactReducer;
  