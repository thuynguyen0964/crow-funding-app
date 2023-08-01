import { takeLatest } from 'redux-saga/effects';
import {
  authLogin,
  authLogout,
  authRefreshWhenReload,
  authRegister,
} from './authSlice';
import {
  handleAuthLogin,
  handleAuthLogout,
  handleAuthRegsiter,
  handleRefreshTokenWhenReload,
} from './authHandlers';

function* authSaga() {
  yield takeLatest(authRegister.type, handleAuthRegsiter);
  yield takeLatest(authLogin.type, handleAuthLogin);
  yield takeLatest(authRefreshWhenReload.type, handleRefreshTokenWhenReload);
  yield takeLatest(authLogout.type, handleAuthLogout);
}

export default authSaga;
