import axios from 'axios';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export async function register(credentials) {
  const { data } = await axios.post('/users/signup', credentials);
  token.set(data.token);
  return data;
}

export async function login(credentials) {
  const { data } = await axios.post('/users/login', credentials);
  token.set(data.token);
  return data;
}

export async function logout() {
  const { data } = await axios.post('/users/logout');
  token.unset();
  return data;
}

export async function getCurrentUser(persistedToken) {
  token.set(persistedToken);

  const { data } = await axios.get('/users/current');
  return data;
}

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
