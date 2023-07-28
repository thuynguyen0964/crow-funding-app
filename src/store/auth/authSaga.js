import { takeLatest } from 'redux-saga/effects';
import { authLogin, authRegister } from './authSlice';
import { handleAuthLogin, handleAuthRegsiter } from './authHandlers';

function* authSaga() {
  yield takeLatest(authRegister.type, handleAuthRegsiter);
  yield takeLatest(authLogin.type, handleAuthLogin);
}

export default authSaga;
