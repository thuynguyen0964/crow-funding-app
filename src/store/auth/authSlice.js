import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: undefined,
    accessToken: null,
  },
  reducers: {
    authLogin: (state, actions) => {
      state, actions.payload;
    },
    authRegister: (state, actions) => {
      state, actions.payload;
    },
    authUpdate: (state, actions) => {
      (state.user = actions.payload.user),
        (state.accessToken = actions.payload.accessToken);
    },
    authFetchUser: (state, actions) => {
      state, actions.payload;
    },
    authRefreshWhenReload: (state, actions) => {},
  },
});

export const {
  authLogin,
  authRegister,
  authUpdate,
  authFetchUser,
  authRefreshWhenReload,
} = authSlice.actions;
export default authSlice.reducer;
