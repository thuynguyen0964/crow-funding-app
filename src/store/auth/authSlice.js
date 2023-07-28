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
  },
});

export const { authLogin, authRegister, authUpdate } = authSlice.actions;
export default authSlice.reducer;
