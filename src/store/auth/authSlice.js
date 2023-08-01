import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: undefined,
    accessToken: null,
  },
  reducers: {
    authLogin: (state) => ({ state }),
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
    authRefreshWhenReload: () => {},
    authLogout: () => ({}),
  },
});

export const {
  authLogin,
  authRegister,
  authUpdate,
  authFetchUser,
  authRefreshWhenReload,
  authLogout,
} = authSlice.actions;
export default authSlice.reducer;
