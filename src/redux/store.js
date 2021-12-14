import { configureStore, } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import reducer from './contacts/reducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
}

const store = configureStore({
  reducer: {
  contacts: persistReducer (contactsPersistConfig, reducer),
},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,]
    }
  }).concat(logger),
  devTools: process.env.NODE_ENV === 'development',
  
});

const persistor = persistStore(store);

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { store, persistor };
