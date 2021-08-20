import { combineReducers } from 'redux';
import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';

const contactsSlice = createSlice({
  name: 'items',
  initialState: [],
  extraReducers: {
    [fetchContacts.fulfilled]: (_, { payload }) => payload,
    [addContact.fulfilled]: (state, { payload }) => [payload, ...state],
    [deleteContact.fulfilled]: (state, { payload }) => {
      return state.filter((contact) => contact.id !== payload);
    },
  },
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter: (_, action) => action.payload,
  },
});

const errorSlice = createSlice({
  name: 'error',
  initialState: [],
  extraReducers: {
    [fetchContacts.pending]: () => null,
    [fetchContacts.rejected]: (_, action) => action.error.message,
  },
});

const isLoadingSlice = createSlice({
  name: 'isLoading',
  initialState: false,
  extraReducers: {
    [fetchContacts.pending]: () => true,
    [fetchContacts.fulfilled]: () => false,
    [fetchContacts.rejected]: () => false,
    
    [addContact.pending]: () => true,
    [addContact.fulfilled]: () => false,
    [addContact.rejected]: () => false,

    [deleteContact.pending]: () => true,
    [deleteContact.fulfilled]: () => false,
    [deleteContact.rejected]: () => false,
  },
});

const items = contactsSlice.reducer;
const filter = filterSlice.reducer;
const error = errorSlice.reducer;
const isLoading = isLoadingSlice.reducer;

export const { changeFilter } = filterSlice.actions;
export default combineReducers({
  items,
  filter,
  error,
  isLoading
});
