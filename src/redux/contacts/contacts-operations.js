import { createAsyncThunk } from '@reduxjs/toolkit'
import * as phonebookAPI from '../../services/phonebookAPI'


export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const contacts = await phonebookAPI.fetchContacts()
    return contacts
  }
)

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact)=>{
    const contact = await phonebookAPI.addContacts(newContact);
    return contact;
  }
)

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId) => {
    await phonebookAPI.deleteContacts(contactId);
    return contactId;
  }
)
