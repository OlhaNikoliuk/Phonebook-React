import { combineReducers } from 'redux';
import { createSlice } from '@reduxjs/toolkit';
import {register, login, logout, getCurrentUser} from '../auth/auth-operations'

const initialState = {
  user:{name: null, email:null},
  token: null,
  isLoggedIn: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers:{
    [register.fulfilled](state,action){
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [login.fulfilled](state,action){
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logout.fulfilled](state,action){
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [getCurrentUser.fulfilled](state,action){
      state.user = action.payload;
      state.isLoggedIn = true;
    }
  }
})

export default authSlice.reducer;