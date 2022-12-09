import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    filter: '',
  },

  reducers: {
      filterContacts(state, action) {
      return { ...state, filter: action.payload };
    },
  },
});

export const { filterContacts } = contactsSlice.actions;


export const getFilter = state => state.contacts.filter;