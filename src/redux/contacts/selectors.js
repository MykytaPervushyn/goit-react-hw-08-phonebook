// export const getFiltredContacts = (allContacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();

//   return allContacts.filter((contact) =>
//     contact.payload.name.toLowerCase().includes(normalizedFilter));
// };
// export const getContacts = state => state.contacts.contactsReducer;
// export const getFilter = state => state.contacts.filter;

// export const getFiltredContacts = state => {
//     const contacts = getContacts(state);
//     const filter = getFilter(state);
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter((contact) =>
//         contact.payload.name.toLowerCase().includes(normalizedFilter));
// };