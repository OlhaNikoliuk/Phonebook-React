import { createAsyncThunk } from '@reduxjs/toolkit'
import { RiCollageFill } from 'react-icons/ri';
import * as phonebookAPI from '../../services/phonebookAPI'


export const register = createAsyncThunk(
  'auth/register',
  async (credentials)=>{
    const data = await phonebookAPI.register(credentials);
    return data;
  }
)

// export const register = createAsyncThunk(
//   "auth/register",
//   async (credentials, { rejectWithValue }) => {
//     try {
//       const data = await phonebookAPI.register(credentials);

//       //toast.succes

//       return data;
//     } catch (error) {
//       //toast.error

//       return rejectWithValue();
//     }
//   }
// );

export const login = createAsyncThunk(
  'auth/login',
  async (credentials)=>{
    const data = await phonebookAPI.login(credentials);
    return data
  }
)

export const logout = createAsyncThunk(
  'auth/logout',
  async ()=>{
    const data = await phonebookAPI.logout();
    return data
  }
)


export const getCurrentUser = createAsyncThunk(
  "auth/currentUser",
  async(_,thunkAPI)=>{
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if(persistedToken === null)return thunkAPI.rejectWithValue()
    const data = await phonebookAPI.getCurrentUser(persistedToken);
    console.log(data)
    return data
  }
)

