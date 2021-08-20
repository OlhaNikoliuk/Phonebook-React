import axios from 'axios';

axios.defaults.baseURL = 'https://611bcc0422020a00175a473e.mockapi.io';

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function addContacts(newContact) {
  const { data } = await axios.post(`/contacts`, newContact);
  return data;
}


export async function deleteContacts(contactId) {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
}