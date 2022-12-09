import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './Contacts/contactsSlice';
import { contactsApi } from './Contacts/contactsApi';
import  authReducer from './Auth/authSlice';
import storage from 'redux-persist/lib/storage';

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



const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'isLoggedIn'],
};

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: contactsSlice.reducer,
        [contactsApi.reducerPath]: contactsApi.reducer,
    },
  middleware: getDefaultMiddleware => [
      ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      }),
    contactsApi.middleware,
  ],
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

