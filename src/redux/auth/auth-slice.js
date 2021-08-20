import { combineReducers } from 'redux';
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  user:{name: '', email:''},
  token: null,
  isLogedIn: false,
}

export default combineReducers({
  
});
