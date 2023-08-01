import { takeLatest } from 'redux-saga/effects';
import { authLogin, authRefreshWhenReload, authRegister } from './authSlice';
import {
  handleAuthLogin,
  handleAuthRegsiter,
  handleRefreshTokenWhenReload,
} from './authHandlers';

function* authSaga() {
  yield takeLatest(authRegister.type, handleAuthRegsiter);
  yield takeLatest(authLogin.type, handleAuthLogin);
  yield takeLatest(authRefreshWhenReload.type, handleRefreshTokenWhenReload);
}

export default authSaga;
