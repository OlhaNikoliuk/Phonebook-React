import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import * as contactsAPI from '../../services/contactsAPI'


//axios.defaults.baseURL = 'https://connections-api.herokuapp.com';




export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const contacts = await contactsAPI.fetchContacts()
    return contacts
  }
)

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact)=>{
    const contact = await contactsAPI.addContacts(newContact);
    return contact;
  }
)

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId) => {
    await contactsAPI.deleteContacts(contactId);
    return contactId;
  }
)
