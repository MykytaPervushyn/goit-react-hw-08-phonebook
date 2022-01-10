// import { combineReducers } from 'redux';
// import { createReducer } from '@reduxjs/toolkit';
// import { addContact, deleteContact, changeFilter } from './actions';

// const contactsReducer = createReducer([], {
//   [addContact]: (state, {payload}) => [...state, payload],
//   [deleteContact]: (state, {payload}) => state.filter(({ id }) => id !== payload.id),
// });

// const filter = createReducer('', {
//   [changeFilter]: (_, {payload}) => payload,
// });

// export default combineReducers({
//     contactsReducer,
//     filter,
// });