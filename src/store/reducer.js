import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './auth/authSlice';

export const reducer = combineReducers({
  auth: authSlice,
});
