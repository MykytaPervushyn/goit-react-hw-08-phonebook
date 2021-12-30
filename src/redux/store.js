import { configureStore, } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import reducer from './contacts/reducer';
import { contactsApi } from './contacts/contactsSlice';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const store = configureStore({
  reducer: {
    contacts:
        reducer
    ,
    [contactsApi.reducerPath]: contactsApi.reducer
},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,]
    }
  })
    .concat(contactsApi.middleware)
    .concat(logger),
  devTools: process.env.NODE_ENV === 'development',
  
});
export default store;